const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  res.end('Request received');
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(8000, () => {
  console.log('waiting for request ..... ');
});
