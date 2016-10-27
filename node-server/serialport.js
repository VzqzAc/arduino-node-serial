const SerialPort = require('serialport');
let port = new SerialPort("COM3", {
  baudRate: 9600,
  parser: SerialPort.parsers.readline("\n")
});

port.on('open', function() {
  console.log('its open');
  port.on('data', function(data) {
    console.log(data.toString());
  })
})
