const http = require('http');
const PORT = 7890;

http.createServer(() => {
  console.log('REQUEST INCOMING!');
}).listen(PORT);
