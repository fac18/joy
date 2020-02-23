const fs = require('fs');
const dbBuild = require('../model/database/db_build');
const schema = fs.readFileSync(`${__dirname}/../model/database/db_build.sql`).toString();
const { getClient } = require('../model/queries/getData.js');

beforeEach(() => {
  return dbBuild(schema);
});

test('Jest is working', () => {
  expect(true).toBeTruthy();
});

test('get a specific client basic info', () => {
  return getClient(1).then(client => {
    expect(client.client_firstname).toBe('Jim');
  });
});

// const getClient = id => {
//   return dbConnection
//     .query(
//       `SELECT client_firstname, client_surname, TO_CHAR(client_dob, 'dd/mm/yyyy') FROM client WHERE client_id=${id};`
//     )
//     .then(data => {
//       console.log('I am the data in the getclient request', data.rows);
//       return data.rows;
//     });
// };
