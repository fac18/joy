const supertest = require('supertest');
const app = require('../index');

let server;
let request;

beforeAll(done => {
  server = app.listen(done);
  request = supertest(server);
});

afterAll(() => setTimeout(() => server.exit(), 1000));

test('test getClient endpoint path works', () => {
  return request.get('/getclient:1').then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test('test getallclients endpoint path works', () => {
  return request.get('/getallclients').then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test('test gettotalclients endpoint path works', () => {
  return request.get('/gettotalclients').then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test('test gettotalservices endpoint path works', () => {
  return request.get('/gettotalclients').then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test('test getwellbeingtotals endpoint path works', () => {
  return request.get('/getwellbeingtotals').then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test('test getservicespopularity endpoint path works', () => {
  return request.get('/getservicespopularity').then(response => {
    expect(response.statusCode).toBe(200);
  });
});

test('test getallservices endpoint path works', () => {
  return request.get('/getallservices').then(response => {
    expect(response.statusCode).toBe(200);
  });
});

// post routes

// look into testing post routes to database

// test('test postreferralform endpoint path works', () => {
//   return request.post('/postreferralform:1').then(response => {
//     expect(response.statusCode).toBe(200);
//   });
// });

// test('test postregisterclient endpoint path works', () => {
//   return request.post('/postregisterclient').then(response => {
//     expect(response.statusCode).toBe(200);
//   });
// });

// test('test postclientassessment endpoint path works', () => {
//   return request.post('/postclientassessment').then(response => {
//     expect(response.statusCode).toBe(200);
//   });
// });
