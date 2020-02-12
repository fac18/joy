const dbConnection = require('../model/dbConnection');

const getAllClients = () => {
  return dbConnection
    .query('SELECT client_firstname, client_surname, client_dob FROM client')
    .then(data => data.rows);
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
