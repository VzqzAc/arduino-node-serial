var socket = io('http://localhost:3000');
  function sendSomething() {
        socket.emit('buttonClicked');
      };
