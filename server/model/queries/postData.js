const dbConnection = require('../database/db_connection');

// Post a new client registration to the database
const postRegisterClient = registerClient => {
  console.log('I am postRegisterClient');
  return dbConnection
    .query(
      'INSERT into client (client_firstname, client_surname, client_knownAs, client_dob, client_phone, client_address, client_nhsNumber, client_consent, client_areasOfSupport) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [
        registerClient.firstName,
        registerClient.lastName,
        registerClient.knownAs,
        registerClient.dateOfBirth,
        registerClient.phoneNumber,
        registerClient.address,
        registerClient.nhsNumber,
        true,
        registerClient.areasOfSupport
      ]
    )
    .then(data => {
      console.log('DATA INSERTED', data);
      // return data;
    })
    .catch(console.log);
};

// Post the ucla3 assessment results to the database

const postClientAssessment = clientAssessment => {
  console.log('I am postClientAssessment');
  const dateTime = clientAssessment.nextAppointment.split('T');
  console.log('I am datetime', dateTime, dateTime[0], dateTime[1]);
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
      console.log('DATA INSERTED', data);
      // return data;
    });
};

const postReferralForm = (referralForm, id) => {
  console.log(referralForm);
  return dbConnection
    .query(
      'INSERT into referrals_questionnaire (services_id, client_id) VALUES ($1, $2)',
      [referralForm.body.referredServiceOne.services_id, id]
    )
    .catch(console.log)
    .then(data => {
      console.log('DATA INSERTED', data);
      // return data;
    });
};

module.exports = { postClientAssessment, postReferralForm, postRegisterClient };

// 'INSERT into ucla3_questionnaire (q1_companionship, q2_left_out, q3_isolated, additionalNotes, next_appointment_date) VALUES (1, 2, 3, 4, 5, 1996-05-05T20:40:00);',
