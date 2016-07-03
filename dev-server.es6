const path = require('path');
const express = require('express');
const app = express();

app.use('/dist', express.static('dist'));

app.get('/api/count', (req, res) => {
  res.contentType('application/json');
  const obj = {"amount": 100};
  res.json(obj);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server start at port 3000")
});