const dbConnection = require("../database/db_connection.js");

//Post the ucla3 assessment results to the database

const postClientAssessment = clientAssessment => {
  console.log("I am postClientAssessment");
  return dbConnection
    .query(
      "INSERT into ucla3_questionnaire (q1_companionship, q2_left_out, q3_isolated, additionalNotes) VALUES ($1, $2, $3,$4)",
      [
        clientAssessment.q1_companionship,
        clientAssessment.q2_left_out,
        clientAssessment.q3_isolated,
        clientAssessment.additionalNotes
        // clientAssessment.next_appointment_date
      ]
    )
    .catch(console.log)
    .then(data => {
      console.log("DATA INSERTED", data);
      // return data;
    });
};

module.exports = postClientAssessment;
