const request = require('supertest');
const app = require('../lib/app');

describe('rick and morty api tests', () => {
  it('gets a list of characters', () => {
    return request(app)
      .get('/characters')
      .then(res => expect(res.text).toContain('Rick'));
  });

  it('saves a note for a character', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'Great character' })
      .then(res => expect(res.status).toEqual(204));
  });
});
