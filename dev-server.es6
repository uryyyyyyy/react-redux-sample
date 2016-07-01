const path = require('path');
const express = require('express');
const app = express();

var server = require('http').createServer();
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ server: server, path: "/chat" });
var port = 3000;

//[{user: "user1", ws: ws1}, {user: "user2", ws: ws2}, ///]
var connections = [];
var userID = 1;

function broadcast(user, message) {
  connections.forEach((con) => {
    const id = Math.floor( Math.random() * 10000 );//generate random number 1 ~ 10000
    const json = {id: id, user: user, message: message};
    con.ws.send(JSON.stringify(json));
  });
}

wss.on('connection', function connection(ws) {

  userID = userID + 1;
  const user = userID;
  connections.push({user: user, ws: ws});

  ws.on('close', function () {
    connections = connections.filter(con => con.ws !== ws);
    broadcast(user, "exited!")
  });

  ws.on('message', function (message) {
    console.log("user: " + user +  ', message: ', message);
    broadcast(user, message)
  });

  broadcast(user, "joined!")
});

app.use('/dist', express.static('dist'));

app.get('/api/sample.json', (req, res) => {
  res.contentType('application/json');
  const obj = {"amount": 100};
  res.json(obj);
});

app.get('/api/todos/all', (req, res) => {
  res.contentType('application/json');
  const todos = [
    {id: 1, text: "todo 1", isComplete: false},
    {id: 2, text: "todo 2", isComplete: false}
  ];
  res.json(todos);
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

server.on('request', app);
server.listen(port, () => console.log('Listening on ' + server.address().port));