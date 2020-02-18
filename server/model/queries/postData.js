const dbConnection = require("../database/db_connection.js");

//Post the ucla3 assessment results to the database

const postClientAssessment = (
  q1_companionship,
  q2_left_out,
  q3_isolated,
  additionalNotes,
  nextAppointment
) => {
  console.log("I am postClientAssessment");
  return dbConnection
    .query(
      "INSERT into ucla3_questionnaire (q1_companionship, q2_left_out, q3_isolated, additionalNotes, nextAppointment) VALUES ($1, $2, $3, $4, $5)",
      [
        q1_companionship,
        q2_left_out,
        q3_isolated,
        additionalNotes,
        nextAppointment
      ]
    )
    .then(data => {
      console.log("I am the data in the postdata function", data);
    });
};

module.exports = postClientAssessment;
