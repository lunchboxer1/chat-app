const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

io.on('connection', (socket) => {
  console.log('New web socket connection.');

  socket.emit('message', 'Welcome!'); // Sends message to the client that just connected
  //   io.emit('countUpdated', count);   // Sends to all connected clients

  socket.on('sendMessage', (msg) => {
    io.emit('message', msg);
  });
});



app.get('/test', (req, res) => {
  // res.render('index');
  res.send({ msg: 'Heyo' });
});

module.exports = { app, server };
