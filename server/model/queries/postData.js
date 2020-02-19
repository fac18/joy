const dbConnection = require('../database/db_connection.js');

//Post the ucla3 assessment results to the database

const postClientAssessment = clientAssessment => {
  console.log('I am postClientAssessment');
  return dbConnection
    .query(
      'INSERT into ucla3_questionnaire (q1_companionship, q2_left_out, q3_isolated, additionalNotes, next_appointment_date, next_appointment_time) VALUES ($1, $2, $3,$4, $5, $6)',
      [
        clientAssessment.q1_companionship,
        clientAssessment.q2_left_out,
        clientAssessment.q3_isolated,
        clientAssessment.additionalNotes,
        '1996-05-05',
        '20:40'
      ]
    )
    .catch(console.log)
    .then(data => {
      console.log('DATA INSERTED', data);
      // return data;
    });
};

module.exports = postClientAssessment;

// 'INSERT into ucla3_questionnaire (q1_companionship, q2_left_out, q3_isolated, additionalNotes, next_appointment_date) VALUES (1, 2, 3, 4, 5, 1996-05-05T20:40:00);',
