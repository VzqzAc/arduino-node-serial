const http = require('http');
const port = 3000;

let server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1><button type="button">Hello!</button></h1>');
  res.end();
});

server.listen(port, () => {
  console.log('Server listen to port: ' + port);
})
