const fs = require('fs');
const path = require('path');

const readThis = path.join('./RestaurantObjs', '1Mill.json');


console.time('readJSON');
fs.readFile(readThis, 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    console.log(obj.length);
    console.log(obj[0]);
    console.timeEnd('readJSON');
  }
});
