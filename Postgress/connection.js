require('dotenv').config();
const pg = require('pg');

const connectionString = {
  host: process.env.PG_HOSTNAME, // server name or IP address;
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const pgClient = new pg.Client(connectionString);
pgClient.connect();

module.exports = { pgClient };
