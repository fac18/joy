// const supertest = require("supertest");
// const app = require("../app");

// let server;
// let request;

// beforeAll(done => {
//   server = app.listen(done);
//   request = supertest(server);
// });

// afterAll(() => setTimeout(() => server.exit(), 1000));

// test("test getClient endpoint path works", () => {
//   return request.get("/get-client?client_id=1").then(response => {
//     expect(response.statusCode).toBe(200);
//   });
// });

test("Jest is working", () => {
  expect(true).toBeTruthy();
});
