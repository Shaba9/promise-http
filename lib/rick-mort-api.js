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

module.exports = {
  getCharacters
};
