const request = require('supertest');
const app = require('../lib/app');

describe('rick and morty api tests', () => {
  it('gets a list of characters', () => {
    return request(app)
      .get('/characters')
      .then(res => expect(res.text).toContain('Rick'));
  });
});
