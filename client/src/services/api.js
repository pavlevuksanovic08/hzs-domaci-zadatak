import { api } from '../services/api';

const API_URL = 'http://localhost:3000';

export const api = {
  createUser: (userData) =>
    fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }).then(r => r.json()),

  getUser: (userId) =>
    fetch(`${API_URL}/users/${userId}`).then(r => r.json()),

  getHabits: (userId) =>
    fetch(`${API_URL}/habits/${userId}`).then(r => r.json()),

  createHabit: (userId, habitName) =>
    fetch(`${API_URL}/habits/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ habit_name: habitName })
    }).then(r => r.json()),

  updateHabit: (userHabitId, completed) =>
    fetch(`${API_URL}/habits/${userHabitId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed })
    }).then(r => r.json()),

  deleteHabit: (userHabitId) =>
    fetch(`${API_URL}/habits/${userHabitId}`, {
      method: 'DELETE'
    }).then(r => r.json()),

  getVitalRecords: (userId) =>
    fetch(`${API_URL}/vital-records/${userId}`).then(r => r.json()),

  createVitalRecord: (userId, data) =>
    fetch(`${API_URL}/vital-records/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(r => r.json())
};