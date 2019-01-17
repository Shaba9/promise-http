const request = require('superagent');

const getCharacters = () => {
  let characters = {};
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(resp => {
      let names = '<ul>';
      resp.body.results.forEach(character => {
        names += `<li>${character.name}</li>`;
        characters[character.id] = character;
      });
      names += '</ul>';
      return names;
    });
};

const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(resp => {
      return resp.body;
    });
};

// const postCharacter = character => {
//   request
//     .post('localhost:7890/characters')
//     .then(() => console.log('api posted'));
// };

module.exports = {
  getCharacters,
  getCharacter,
  // postCharacter
};

request
  .post('http://localhost:7890/characters')
  .then(() => console.log('request done'));
