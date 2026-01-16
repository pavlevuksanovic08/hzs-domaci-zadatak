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

router.post('/:user_id', async (req, res) => {
  const { habit_name } = req.body;
  const user_id = req.params.user_id;

  try {
    const pool = await poolPromise;
    
    const habitCheck = await pool.request()
      .input('name', sql.NVarChar(100), habit_name)
      .query('SELECT habit_id FROM habits WHERE name = @name');

    let habit_id;
    
    if (habitCheck.recordset.length > 0) {
      habit_id = habitCheck.recordset[0].habit_id;
    } else {
      const insertHabit = await pool.request()
        .input('name', sql.NVarChar(100), habit_name)
        .query('INSERT INTO habits (name) VALUES (@name); SELECT SCOPE_IDENTITY() as habit_id');
      
      habit_id = insertHabit.recordset[0].habit_id;
    }

    const result = await pool.request()
      .input('user_id', sql.Int, user_id)
      .input('habit_id', sql.Int, habit_id)
      .input('completed', sql.Bit, 0)
      .query(`
        INSERT INTO user_habits (user_id, habit_id, completed)
        VALUES (@user_id, @habit_id, @completed);
        SELECT SCOPE_IDENTITY() as user_habit_id
      `);

    res.json({ 
      user_habit_id: result.recordset[0].user_habit_id,
      message: 'Habit created successfully' 
    });
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

router.delete('/:user_habit_id', async (req, res) => {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, req.params.user_habit_id)
      .query('DELETE FROM user_habits WHERE user_habit_id = @id');

    res.json({ message: 'Habit deleted' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;