const dbConnection = require("./db_connection");
const fs = require("fs");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

// db_build(sql)
//   .then(console.log)
//   .catch(console.log);

dbConnection.query(sql, (err, res) => {
  if (err) throw err;
  console.log("Tables created with results: ", res);
});

// module.exports = db_build;
