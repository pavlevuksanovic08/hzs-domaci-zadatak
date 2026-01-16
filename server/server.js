const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Vite default port
  credentials: true
}));

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/habits', require('./routes/habits'));
app.use('/vital-records', require('./routes/vitalRecords'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});