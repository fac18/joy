const { Pool } = require("pg");
const url = require("url");

// check environment and load env variables/assign database URL accordingly

const { DATABASE_URL } = process.env;

const params = url.parse(DATABASE_URL);

const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== "localhost"
};

module.exports = new Pool(options);
