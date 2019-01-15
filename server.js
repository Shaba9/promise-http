const http = require('http');
const PORT = 7890;

http.createServer((req, res) => {
  console.log('REQUEST INCOMING!');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><h1>THANKS FOR VISITING!</h1>');
  res.end('Bye!</body></html>');
}).listen(PORT, () => console.log('SERVER RUNNING'));


