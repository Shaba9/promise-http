const { parse } = require('url');
const {
  getCharacters,
  getCharacter,
  postCharacter
} = require('./rick-mort-api');

module.exports = (req, res) => {
  console.log('RICK-MORT REQUEST INCOMING!');
  const url = parse(req.url, true);
  const pathname = url.pathname;
  let data = '';

  req.on('data', chunk => {
    data += chunk;
  });

  req.on('end', () => console.log('data', data));

  res.setHeader('Content-Type', 'text/html');
  res.write(`
  <html>
    <body>
      <h1>Rick and Morty API-API</h1>
    </body>
  </html>
  `);
  if(pathname === '/') {
    res.statusCode = 200;
    res.end('go to a route');
  } 
  else if(req.method === 'GET' && pathname === '/characters') {
    res.statusCode = 200;
    getCharacters()
      .then(names => {
        res.end(names);
      });
  }
  else if(req.method === 'POST' && pathname === '/characters') {
    res.statusCode = 200;
    postCharacter();
    res.end();
  }
  else if(pathname.includes('/characters/')) {
    const id = pathname.slice(1).split('/')[1];
    getCharacter(parseInt(id))
      .then(character => {
        res.end(JSON.stringify(character));
      });
  }
};
