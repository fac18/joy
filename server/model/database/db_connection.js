const { Pool } = require('pg');
const url = require('url');
const dotenv = require('dotenv').config();

let DB_URL = process.env.DB_URL;
console.log(DB_URL);

if (!DB_URL) throw new Error('Environment variable not available');

const params = url.parse(DB_URL);

const [username, password] = params.auth.split(':');

const options = {
  host: 'localhost',
  port: '5432',
  database: 'joy_data',
  user: 'team_joy',
  password: 'joy2020'
};

module.exports = new Pool(options);
