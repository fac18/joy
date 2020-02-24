const supertest = require('supertest');
const app = require('../index');

let server;
let request;

beforeAll(done => {
  server = app.listen(done);
  request = supertest(server);
});

afterAll(() => setTimeout(() => server.exit(), 1000));

// afterAll(done => {
//   server.close(done);
// });

test('test getClient endpoint path works', () => {
  return request.get('/get-client:1').then(response => {
    expect(response.statusCode).toBe(200);
  });
});
