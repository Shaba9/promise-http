const http = require('http');
const app = require('./lib/app');
const PORT = 7890;

http.createServer(app)
  .listen(PORT, () => `SERVER RUNNING ON ${PORT}`);
