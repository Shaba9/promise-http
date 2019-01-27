const { parse } = require('url');
const { getCharacters } = require('./service/rickAndMortyApi');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  const pathname = url.pathname;
  if(req.method === 'GET' && pathname === '/characters') {
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><ul>');
        characters.forEach(char => res.write(`<li>${char.name}</li>`));
        res.end('</body></html>');
      });
  }
};
