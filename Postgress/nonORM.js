const pg = require('pg');

const connectionString = {
  host: 'localhost', // server name or IP address;
  port: 5432,
  database: 'root',
  user: 'root',
  password: 'password',
};

const pgClient = new pg.Client(connectionString);
pgClient.connect();

module.exports = { pgClient };
