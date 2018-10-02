const fs = require('fs');
const { insertRestaurant, readThis } = require('./insertFunc.js');

console.time('three');
fs.readFile(readThis, 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    data = JSON.parse(data);
    insertRestaurant(data.slice(400000, 600000), 'three');
    console.timeEnd('three');
  }
});
setTimeout(() => process.exit(), 240000);
