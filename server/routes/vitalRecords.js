const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');

router.get('/:user_id', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('user_id', sql.Int, req.params.user_id)
      .query(`
        SELECT * FROM vital_records
        WHERE user_id = @user_id
        ORDER BY created_at DESC
      `);

    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/:user_id', async (req, res) => {
  const { weight, height, kcal, water, sleeptime, created_at } = req.body;

  try {
    const pool = await poolPromise;
    await pool.request()
      .input('user_id', sql.Int, req.params.user_id)
      .input('weight', sql.Decimal(5,2), weight)
      .input('height', sql.Int, height)
      .input('kcal', sql.Int, kcal)
      .input('water', sql.Int, water)
      .input('sleeptime', sql.Time, sleeptime)
      .input('created_at', sql.Date, created_at)
      .query(`
        MERGE vital_records AS target
        USING (SELECT @user_id AS user_id, @created_at AS created_at) AS source
        ON target.user_id = source.user_id AND target.created_at = source.created_at
        WHEN MATCHED THEN
          UPDATE SET weight=@weight, height=@height, kcal=@kcal, water=@water, sleeptime=@sleeptime
        WHEN NOT MATCHED THEN
          INSERT (user_id, weight, height, kcal, water, sleeptime, created_at)
          VALUES (@user_id, @weight, @height, @kcal, @water, @sleeptime, @created_at);
      `);

    res.json({ message: 'Vital record saved/updated' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
