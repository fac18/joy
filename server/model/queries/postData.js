const dbConnection = require("../database/db_connection.js");

//Post the ucla3 assessment results to the database

const postClientAssessment = (
  //   input_date_ucla3,
  //   client_id,
  q1_companionship,
  q2_left_out,
  q3_isolated,
  next_appointment_date
) => {
  console.log("I am postClientAssessment");
  return dbConnection
    .query(
      "INSERT into ucla3_questionnaire (q1_companionship, q2_left_out, q3_isolated, next_appointment_date) VALUES ($1, $2, $3,$4)",
      [q1_companionship, q2_left_out, q3_isolated, next_appointment_date]
    )
    .then(data => {
      console.log("I am the data in the postdata function", data);
      //   return data;
    });
};

module.exports = postClientAssessment;
