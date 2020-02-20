const dbConnection = require('../database/db_connection.js')

// Sends a request to the database including reformatting data to make more readable

const getAllClients = () => {
  console.log('I am getallclients')
  return dbConnection
    .query(
      "SELECT client_id, client_firstname, client_surname, TO_CHAR(client_dob, 'dd/mm/yyyy') FROM client"
    )
    .then(data => {
      console.log('I am the data in the getdata function', data.rows)
      return data.rows
    })
};

const getClient = id => {
  return dbConnection
    .query(
      `SELECT client_firstname, client_surname, TO_CHAR(client_dob, 'dd/mm/yyyy') FROM client WHERE client_id=${id};`
    )
    .then(data => {
      console.log('I am the data in the getclient request', data.rows)
      return data.rows
    })
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
      )
      return data.rows
    })
};

const getClientServices = id => {
  return dbConnection
    .query(
      `SELECT services_name FROM services WHERE services_id =ANY(SELECT services_id FROM referrals_questionnaire WHERE client_id=${id});`
    )
    .then(data => {
      console.log('I am the data in the getclientservices request', data.rows)
      return data.rows
    })
};

// const getClientAge = id => {
//   console.log('I am inside getclientage')
//   return dbConnection
//     .query(
//       `SELECT client_id, client_firstname, client_surname, EXTRACT(YEAR FROM age(current_date, client_dob)) AS current_age FROM client WHERE client_id=${id});`
//     )
//     .then(data => {
//       console.log('I am the data in the getclientage request', data.rows)
//       return data.rows
//     })
// };

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
      )
      return data.rows
    })
};

// const getClientInfo = id => {
//   return dbConnection
//     .query(
//       'SELECT services_name FROM services WHERE services_id client_id = $1',
//       [id]
//     )
//     .then(data => data.rows);
// };

const getAllServices = () => {
  return dbConnection.query('SELECT * FROM services').then(data => data.rows)
};

const getWellbeingTotals = () => {
  return dbConnection
    .query(
      'SELECT COUNT(total_ucla3) FILTER (WHERE total_ucla3 >= 8) AS lonely_8_9, COUNT(total_ucla3) FILTER (WHERE total_ucla3 BETWEEN 5 AND 7) AS ok_5_6_7, COUNT(total_ucla3) FILTER (WHERE total_ucla3 <= 4) AS not_lonely_3_4 FROM ucla3_questionnaire'
    )
    .then(data => {
      return data.rows
    })
};

module.exports = {
  getClient,
  getAllClients,
  getCurrentAssessment,
  getInitialAssessment,
  getClientServices,
  getWellbeingTotals,
  getAllServices
}
