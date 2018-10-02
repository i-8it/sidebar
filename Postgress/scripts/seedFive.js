const fs = require('fs');
const { insertRestaurant, readThis } = require('./insertFunc.js');


fs.readFile(readThis, 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    data = JSON.parse(data);
    insertRestaurant(data.slice(800000, 1000000), 'Five');
  }
});

setTimeout(() => process.exit(), 240000);
