const fs = require('fs');
const path = require('path');

const readThis = path.join('./RestaurantObjs', 'tenthMill.json');


console.time('readJSON');
fs.readFile('./smallInfo.json', 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    console.log(obj.length);
    console.log(obj[obj.length-1]);
    console.timeEnd('readJSON');
  }
});
