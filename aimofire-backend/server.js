const express = require('express');
const app = express();

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/habits', require('./routes/habits'));
app.use('/vital-records', require('./routes/vitalRecords'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
