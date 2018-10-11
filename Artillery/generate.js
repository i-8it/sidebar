//

const fs = require('fs');
const { generateRestaurantInfo } = require('../data/writeRestaurantJSON');
const path = require('path');

console.time('GenerateData1');
fs.readFile(path.join('../data/Names/', 'array0.json'), 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 10000000);
    fs.writeFile('objects.json', JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData1');
    });
  }
});

