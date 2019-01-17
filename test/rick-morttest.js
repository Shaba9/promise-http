const request = require('supertest');
const app = require('../lib/rick-mort');

jest.mock('../lib/rick-mort-api');

describe('rick-mort', () => {
  it('gets a character by id', () => {
    return request(app)
      .get('/characters/9')
      .then(res => console.log('res', res));
  });

  // it('post route', () => {
  //   console.log('test running');
  //   return request
  //     .post('/characters')
  //     .send({ charId: 1234, note: 'My favorite character' })
  //     .then(res => {
  //       // expect(res.status).toEqual(204);
  //       console.log('res', res);
  //     });
  // });
});
