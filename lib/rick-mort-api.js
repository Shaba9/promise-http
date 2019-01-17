const request = require('superagent');

let characters = {};

const getCharacters = () => {
  console.log('characters api called');
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(resp => {
      console.log('response api', resp);
      let names = '<ul>';
      resp.body.results.forEach(character => {
        names += `<li>${character.name}</li>`;
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

const postCharacter = character => {
  // request
  //   .post('http://localhost:7890/characters')
  //   .then(() => {
      console.log('api posted');
      characters[character.charId] = [character.note];
      return characters;
    // });
};

module.exports = {
  getCharacters,
  getCharacter,
  postCharacter
};

// request
//   .get('http://localhost:7890/characters')
//   // .send({ charId: 1234, note: 'My favorite character' })
//   .then(res => console.log('request done', res));

