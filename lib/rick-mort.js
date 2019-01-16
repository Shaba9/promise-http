const { parse } = require('url');
const request = require('superagent');

module.exports = (req, res) => {
  console.log('RICK-MORT REQUEST INCOMING!');
  const url = parse(req.url, true);
  const pathname = url.pathname;
  let data = '';
  let characters = {};

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`
  <html>
    <body>
      <h1>Rick and Morty API-API</h1>
    </body>
  </html>
  `);

  if(pathname === '/') {
    console.log('CONNECTED TO API');
    request
      .get('https://rickandmortyapi.com/api/character/')
      .then(resp => {
        let names = '<ul>';
        resp.body.results.forEach(character => {
          names += `<li>${character.name}</li>`;
          characters[character.id] = character;
        });
        names += '</ul>';
        
        res.end(names);
        console.log('characters', characters[1]);
      });
    //   .get('https://rickandmortyapi.com/api/character/', resp => {
    //   resp.on('data', chunk => data += chunk);
    //   resp.on('end', () => {
    //     let names = '<ul>';

    //     JSON.parse(data).results.forEach(character => {
    //       names += `<li>${character.name}</li>`;
    //       characters[character.id] = character;
    //     });
    //     names += '</ul>';
        
    //     res.end(names);
    //     console.log('characters', characters[1]);
    //   });
    // });
  }
};

