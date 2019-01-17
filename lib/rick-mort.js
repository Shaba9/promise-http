const { parse } = require('url');
const {
  getCharacters,
  getCharacter,
  // postCharacter
} = require('./rick-mort-api');
// const request = require('superagent');

module.exports = (req, res) => {
  console.log('RICK-MORT REQUEST INCOMING!');
  const url = parse(req.url, true);
  const pathname = url.pathname;

  res.write(`
  <html>
    <body>
      <h1>Rick and Morty API-API</h1>
    </body>
  </html>
  `);
  if(pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('go to a route');
  } 
  else if(url.method === 'GET' && pathname === '/characters') {
    console.log('characters called');
    getCharacters()
      .then(names => {
        res.end(names);
      });
  }
  else if(url.method === 'POST' && pathname === '/characters') {
    console.log('post', req.body);
    res.statusCode = 204;
    res.end();
    // postCharacter()
    //   .then(() => res.end('blah'));
  }
  else if(pathname.includes('/characters/')) {
    const id = pathname.slice(1).split('/')[1];
    getCharacter(parseInt(id))
      .then(character => {
        res.end(JSON.stringify(character));
      });
  }
};
