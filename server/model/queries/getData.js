const dbConnection = require('../database/db_connection.js');

// Sends a request to the database including reformatting data to make more readable

const getAllClients = () => {
  console.log('I am getallclients');
  return dbConnection
    .query(
      "SELECT client_id, client_firstname, client_surname, TO_CHAR(client_dob, 'dd/mm/yyyy') FROM client"
    )
    .then(data => {
      console.log('I am the data in the getdata function', data.rows);
      return data.rows;
    });
};

// const getClientInfo = id => {
//   return dbConnection
//     .query(
//       'SELECT services_name FROM services WHERE services_id client_id = $1',
//       [id]
//     )
//     .then(data => data.rows);
// };

const getPrescriber = id => {
  return dbConnection
    .query(
      'SELECT prescriber_firstname, prescriber_surname WHERE prescriber_id=$1',
      [id]
    )
    .then(data => data.rows);
};

const getClient = id => {
  return dbConnection
    .query(
      'SELECT client_firstname, client_surname, client_dob WHERE client_id=$1',
      [id]
    )
    .then(data => data.rows);
};

const getService = id => {
  return dbConnection
    .query('SELECT service_name, service_provider WHERE service_id=$1', [id])
    .then(data => data.rows);
};

const getAssessment = id => {
  return dbConnection
    .query('SELECT service_name, service_provider WHERE service_id=$1', [id])
    .then(data => data.rows);
};

module.exports = {
  getClient,
  getPrescriber,
  getService,
  getAllClients
};
