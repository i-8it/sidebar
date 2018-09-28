const fs = require('fs');
const { generateRestaurantInfo } = require('./writeRestaurantJSON');
const path = require('path');
const readFrom = path.join('./RestaurantNames/', 'array0.json');
const writeTo = path.join('./RestaurantObjs', '1Mill.json');

console.time('GenerateData1');
fs.readFile(path.join('./RestaurantNames/', 'array0.json'), 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 1);
    fs.writeFile(path.join('./RestaurantObjs', '1Mill.json'), JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData1');
    });
  }
});

console.time('GenerateData2');
fs.readFile(path.join('./RestaurantNames/', 'array1.json'), 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 1000001);
    fs.writeFile(path.join('./RestaurantObjs', '2Mill.json'), JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData2');
    });
  }
});

console.time('GenerateData3');
fs.readFile(path.join('./RestaurantNames/', 'array2.json'), 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 2000001);
    fs.writeFile(path.join('./RestaurantObjs', '3Mill.json'), JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData3');
    });
  }
});

console.time('GenerateData4');
fs.readFile(path.join('./RestaurantNames/', 'array3.json'), 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 3000001);
    fs.writeFile(path.join('./RestaurantObjs', '4Mill.json'), JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData4');
    });
  }
});

console.time('GenerateData5');
fs.readFile(path.join('./RestaurantNames/', 'array4.json'), 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 4000001);
    fs.writeFile(path.join('./RestaurantObjs', '5Mill.json'), JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData5');
    });
  }
});

console.time('GenerateData6');
fs.readFile(path.join('./RestaurantNames/', 'restaurant1.json'), 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 5000001);
    fs.writeFile(path.join('./RestaurantObjs', '6Mill.json'), JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData6');
    });
  }
});

console.time('GenerateData7');
fs.readFile(path.join('./RestaurantNames/', 'restaurant2.json'), 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 6000001);
    fs.writeFile(path.join('./RestaurantObjs', '7Mill.json'), JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData7');
    });
  }
});

console.time('GenerateData8');
fs.readFile(path.join('./RestaurantNames/', 'restaurant3.json'), 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 7000001);
    fs.writeFile(path.join('./RestaurantObjs', '8Mill.json'), JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData8');
    });
  }
});

console.time('GenerateData9');
fs.readFile(path.join('./RestaurantNames/', 'restaurant4.json'), 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 8000001);
    fs.writeFile(path.join('./RestaurantObjs', '9Mill.json'), JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData9');
    });
  }
});

console.time('GenerateData10');
fs.readFile(path.join('./RestaurantNames/', 'restaurant5.json'), 'utf8', (err, data) => {
  if (err) {
    console.log('error');
  } else {
    const obj = JSON.parse(data);
    const alldata = [];
    generateRestaurantInfo(obj, alldata, 9000001);
    fs.writeFile(path.join('./RestaurantObjs', '10Mill.json'), JSON.stringify(alldata), 'utf8', (error) => {
      if (error) {
        return console.log(err);
      }
      console.timeEnd('GenerateData10');
    });
  }
});

// Teminal Script to seed Mongo
// for filename in ./*json; do mongoimport --jsonArray --db 27017 --collection restaurants --type json --file "$filename"; done
