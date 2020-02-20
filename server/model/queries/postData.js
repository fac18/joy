const dbConnection = require('../database/db_connection.js')

//Post the ucla3 assessment results to the database

const postClientAssessment = clientAssessment => {
  console.log('I am postClientAssessment')
  const dateTime = clientAssessment.nextAppointment.split('T')
  console.log('I am datetime', dateTime, dateTime[0], dateTime[1])
  return dbConnection
    .query(
      'INSERT into ucla3_questionnaire (client_id, q1_companionship, q2_left_out, q3_isolated, additionalNotes, next_appointment_date, next_appointment_time) VALUES ($1, $2, $3,$4, $5, $6, $7)',
      [
        clientAssessment.client_id,
        clientAssessment.q1_companionship,
        clientAssessment.q2_left_out,
        clientAssessment.q3_isolated,
        clientAssessment.additionalNotes,
        dateTime[0],
        dateTime[1]
      ]
    )
    .catch(console.log)
    .then(data => {
      console.log('DATA INSERTED', data)
      // return data;
    })
};

const postReferralForm = referralForm => {
  return dbConnection
    .query(
      'INSERT into referrals_questionnaire (client_id, services_id) VALUES ($1, $2)',
      [referralForm]
    )
    .catch(console.log)
    .then(data => {
      console.log('DATA INSERTED', data)
      // return data;
    })
};

module.exports = { postClientAssessment, postReferralForm }

// 'INSERT into ucla3_questionnaire (q1_companionship, q2_left_out, q3_isolated, additionalNotes, next_appointment_date) VALUES (1, 2, 3, 4, 5, 1996-05-05T20:40:00);',
