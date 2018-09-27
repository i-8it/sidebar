const fs = require('fs');
const { generateRestaurantInfo } = require('./writeRestaurantJSON');
const path = require('path');
const readFrom = path.join('./RestaurantNames/', 'restaurant5.json');
const writeTo = path.join('./RestaurantObjs', 'tenthMill.json');

console.time('TEST');
fs.readFile('./smallNames.json', 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata);
    fs.writeFile('./smallInfo.json', JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('TEST');
    });
  }
});
