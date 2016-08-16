const path = require('path');
const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.get('/api/count', (req, res) => {
  res.contentType('application/json');
  const obj = {"amount": 100};
  res.json(obj);
});

app.get('/api/countFail', (req, res) => {
  res.contentType('application/json');
  res.status(401).json(null);
});

app.get('/authCheck', (req, res) => {
  res.contentType('application/json');
  const obj = {"amount": 100};
  res
      //.status(401) //fif you want to test authorize fail, use this.
      .json(obj);
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
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