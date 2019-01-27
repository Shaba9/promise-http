const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/tester')
      .query({ name: 'shaba' })
      .then(res => {
        expect(res.body).toEqual({ hi: 'there shaba' });
      });
  });

  // it('posts at /note', () => {
  //   return request(app)
  //     .post('/note')
  //     .send({})
  //     .then(res => {
  //       expect(res.body).toEqual({ text: 'this is a note' });
  //     });
  // });
});
