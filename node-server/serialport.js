const SerialPort = require('serialport');
let port = new SerialPort("COM3", {
  baudRate: 9600,
  parser: SerialPort.parsers.readline("\n")
});

port.on('data', function(data) {
  console.log(data.toString());
})

module.exports = {
  send: () => {
          port.write('led', function(err) {
            if(err) return err;
            else return 'success';;
          });
        }
}
