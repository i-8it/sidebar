const redis = require('redis');

const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient(6379, REDIS_URL);

client.on('connect', () => {
  console.log('connected to redis');
});
client.on('error', (err) => {
  console.log(`Error: ${err}`);
});

module.exports = client;
