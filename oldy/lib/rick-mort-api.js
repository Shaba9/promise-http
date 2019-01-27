const request = require('superagent');
// const reqtest = require('supertest');
// const app = ('./rick-mort');

let characters = {};

const getCharacters = () => {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(resp => {
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
  console.log('api posted', character);
  // characters[character.charId] = [character.note];
  return characters;
  // });
};

module.exports = {
  getCharacters,
  getCharacter,
  postCharacter
};

request
  .post('http://localhost:7890/characters')
  .send({ charId: 1234, note: 'My favorite character' })
  // .set('X-API-Key', 'foobar')
  // .set('Accept', 'application/json')
  .then(res => console.log('request done', res));

