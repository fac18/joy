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

const getClient = id => {
  return dbConnection
    .query(
      `SELECT client_firstname, client_surname, TO_CHAR(client_dob, 'dd/mm/yyyy') FROM client WHERE client_id=${id};`
    )
    .then(data => {
      console.log('I am the data in the getclient request', data.rows);
      return data.rows;
    });
};

const getInitialAssessment = id => {
  return dbConnection
    .query(
      `SELECT ucla3_id, TO_CHAR(input_date_ucla3, 'dd/mm/yyyy') AS initial_assessment_date, total_ucla3, client_id
FROM ucla3_questionnaire
WHERE client_id = ${id}
ORDER BY input_date_ucla3 ASC
LIMIT 1;`
    )
    .then(data => {
      console.log(
        'I am the data in the getinitialassessment request',
        data.rows
      );
      return data.rows;
    });
};

const getClientServices = id => {
  return dbConnection
    .query(
      `SELECT services_name FROM services WHERE services_id =ANY(SELECT services_id FROM referrals_questionnaire WHERE client_id=${id});`
    )
    .then(data => {
      console.log('I am the data in the getclientservices request', data.rows);
      return data.rows;
    });
};

// async function getAllAssessments() {
//   console.log('starting async query');
//   const result = await dbConnection.query(`SELECT ucla3_id, input_date_ucla3 AS initial_assessment_date, total_ucla3, client_id
// FROM ucla3_questionnaire
// WHERE client_id = 1
// ORDER BY input_date_ucla3 ASC
// LIMIT 1;`);
//   console.log('async query finished');
//   console.log('starting callback query');
//   dbConnection
//     .query(
//       `SELECT ucla3_id, input_date_ucla3 AS current_assessment_date, total_ucla3, client_id
// FROM ucla3_questionnaire
// WHERE client_id = 1
// ORDER BY input_date_ucla3 DESC
// LIMIT 1;`
//     )
//     .then(data => {
//       return data.rows;
//     });
//   console.log('calling end');
//   // await dbConnection.end();
//   console.log('pool has drained');
// }

// getAllAssessments().then(data => {
//   console.log('I am the data in getallassessments', data);
// });

// getClient(1).then(data => {
//   console.log('I am the data in the router', data);
//   return res.json(data);
// });

const getCurrentAssessment = id => {
  return dbConnection
    .query(
      `SELECT ucla3_id, TO_CHAR(input_date_ucla3, 'dd/mm/yyyy') AS current_assessment_date, total_ucla3, client_id
FROM ucla3_questionnaire
WHERE client_id = ${id}
ORDER BY input_date_ucla3 DESC
LIMIT 1;`
    )
    .then(data => {
      console.log(
        'I am the data in the getcurrentassesssment request',
        data.rows
      );
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

const getTotalClients = () => {
  return dbConnection
    .query('SELECT COUNT(client_id) FROM client')
    .then(data => {
      console.log('getTotalClients output:', data.rows);
      return data.rows;
    });
};

const getTotalServices = () => {
  return dbConnection
    .query('SELECT COUNT(services_id) FROM services')
    .then(data => {
      console.log('getTotalServices output:', data.rows);
      return data.rows;
    });
};

const getWellbeingTotals = () => {
  return dbConnection
    .query(
      'SELECT COUNT(total_ucla3) FILTER (WHERE total_ucla3 >= 8) AS lonely_8_9, COUNT(total_ucla3) FILTER (WHERE total_ucla3 BETWEEN 5 AND 7) AS ok_5_6_7, COUNT(total_ucla3) FILTER (WHERE total_ucla3 <= 4) AS not_lonely_3_4 FROM ucla3_questionnaire'
    )
    .then(data => {
      return data.rows;
    });
};

const getServicesPopularity = () => {
  return dbConnection
    .query(
      "SELECT services.services_name AS service_name, SUM(no_of_services_attended) FROM referrals_questionnaire JOIN services ON services.services_id = referrals_questionnaire.services_id WHERE input_date_referral BETWEEN '2019-01-01' AND current_date GROUP BY referrals_questionnaire.services_id, services.services_name ORDER BY SUM(no_of_services_attended) DESC LIMIT 5"
    )
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  getClient,
  getService,
  getAllClients,
  getCurrentAssessment,
  getInitialAssessment,
  getClientServices,
  getTotalClients,
  getTotalServices,
  getWellbeingTotals,
  getServicesPopularity,
};
