const bodyParser = require('./bodyParser');
const { parse } = require('url');
const { getCharacters, getCharacter } = require('./service/rickAndMortyApi');

const notes = {};
const pushNote = (id, note) => {
  if(!notes[id]) notes[id] = [];
  
  notes[id].push(note);
};

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
  } else if(req.method === 'POST' && pathname === '/characters') {
    bodyParser(req)
      .then(({ characterId: id, note }) => {
        pushNote(id, note);
        res.statusCode = 204;
        res.end();
      });
  } else if(req.method === 'GET' && pathname.includes('/characters/')) {
    const id = url.pathname.slice(1).split('/')[1];
    const charNotes = notes[id];
    getCharacter(id)
      .then(character => {
        const noteItems = charNotes
          .reduce((acc, note) => {
            acc += `<li>${note}</li>`;
            return acc;
          }, '');

        res.setHeader('Content-Type', 'text/html');
        res.end(`
        <html>
          <body>
            <h1>${character.name}</h1>
            <ul>${noteItems}</ul>
          </body>
        </html>
        `);
      });
  }
};
