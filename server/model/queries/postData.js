const dbConnection = require('../database/db_connection');

//Post a new client registration to the database
const postRegisterClient = registerClient => {
    console.log("I am postRegisterClient");
    return dbConnection
      .query(
        "INSERT into client (client_firstname, client_surname, client_knownAs, client_dob, client_phone, client_address, client_nhsNumber, client_consent, client_areasOfSupport) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
        [
          registerClient.client_firstname,
          registerClient.client_surname,
          registerClient.client_knownAs,
          registerClient.client_dob,
          registerClient.client_phone,
          registerClient.client_address,
          registerClient.client_nhsNumber,
          registerClient.client_consent,
          registerClient.client_areasOfSupport
        ]
      )
      .then(data => {
          console.log("DATA INSERTED", data);
          // return data;
        })
        .catch(console.log)
  };
  module.exports = postRegisterClient;
  
  