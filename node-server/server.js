const express = require('express');
const path = require('path');
const socket = require('socket.io');
const serial = require('./serialport');
let app = express();

app.use(express.static(path.join(__dirname, 'public')));

server = app.listen(3000, () => {
  console.log('Listening at port 3000');
});

let io = socket(server);

io.sockets.on('connection', (socket) => {
  socket.on('buttonClicked', function() {
      console.log('entered');
      serial.send();
    })
  });
