const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');

router.get('/:user_id', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('user_id', sql.Int, req.params.user_id)
      .query(`
        SELECT uh.user_habit_id, h.name, uh.completed
        FROM user_habits uh
        JOIN habits h ON uh.habit_id = h.habit_id
        WHERE uh.user_id = @user_id
      `);

    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch('/:user_habit_id', async (req, res) => {
  const { completed } = req.body;

  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, req.params.user_habit_id)
      .input('completed', sql.Bit, completed)
      .query('UPDATE user_habits SET completed=@completed WHERE user_habit_id=@id');

    res.json({ message: 'Habit updated' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
