const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

let count = 0;

io.on('connection', (socket) => {
  console.log('New web socket connection.');

  socket.emit('countUpdated', count);

  socket.on('increment', () => {
    count += 1;

    // socket.emit('countUpdated', count);
    io.emit('countUpdated', count);
  });
});

app.get('/test', (req, res) => {
  // res.render('index');
  res.send({ msg: 'Heyo' });
});

module.exports = { app, server };
