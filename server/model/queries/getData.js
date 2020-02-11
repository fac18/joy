const dbConnection = require("../model/dbConnection");

const getPrescriber = id => {
    return dbConnection.query(
        "SELECT prescriber_firstname, prescriber_surname WHERE prescriber_id=$1",
        [id]
    )
    .then(data => data.rows);
};

const getClient = id => {
    return dbConnection.query(
        "SELECT client_firstname, client_surname, client_dob WHERE client_id=$1",
        [id]
    )
    .then(data => data.rows);
};

const getService = id => {
    return dbConnection.query(
        "SELECT service_name, service_provider WHERE service_id=$1",
        [id]
    )
    .then(data => data.rows);
};

module.exports = {
    getClient,
    getPrescriber,
    getService
}