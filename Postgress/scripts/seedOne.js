const fs = require('fs');
const { insertRestaurant, readThis } = require('./insertFunc.js');


fs.readFile(readThis, 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    data = JSON.parse(data);
    insertRestaurant(data.slice(0, 67000), 'one');
    insertRestaurant(data.slice(67000, 134000), 'one');
    insertRestaurant(data.slice(134000, 200000), 'one');
  }
});
setTimeout(() => process.exit(), 220000);
