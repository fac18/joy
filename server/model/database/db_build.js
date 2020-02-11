const dbConnection = require('./db_connection');
const fs = require('fs');

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

db_build(sql)
  .then(console.log)
  .catch(console.log);

module.exports = db_build;

