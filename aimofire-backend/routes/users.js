const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');

router.post('/', async (req, res) => {
  const { first_name, last_name, gender, date_of_birth } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('first_name', sql.VarChar, first_name)
      .input('last_name', sql.VarChar, last_name)
      .input('gender', sql.VarChar, gender)
      .input('date_of_birth', sql.Date, date_of_birth)
      .query(`
        INSERT INTO users (first_name, last_name, gender, date_of_birth)
        OUTPUT INSERTED.user_id
        VALUES (@first_name, @last_name, @gender, @date_of_birth)
      `);

    res.json({ user_id: result.recordset[0].user_id });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', sql.Int, req.params.id)
      .query('SELECT * FROM users WHERE user_id = @id');

    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
