const faker = require('faker');
const fs = require('fs');

const { foods } = require('./helpers.js');


const getNames = (prefix) => {
  const names = [];
  for (let i = 0; i < 1000000; i++) {
    names.push((`${faker.name.firstName()}'s ${faker.commerce.productAdjective()} ${foods[Math.round(Math.random() * 281)]} #${i + prefix}`));
    if (i === 250000) {
      console.log(`${prefix} 1/4`);
    } else if (i === 500000) {
      console.log(`${prefix} 2/4`);
    } else if (i === 750000) {
      console.log(`${prefix} 3/4`);
    } else if (i === 999999) {
      console.log(`${prefix} 4/4`);
    }
  }
  return names;
};


console.time('one');
fs.writeFile('./Names/array5.json', JSON.stringify(getNames(5000001)), 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
  console.timeEnd('one');
});

console.time('two');
fs.writeFile('./Names/array6.json', JSON.stringify(getNames(6000001)), 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
  console.timeEnd('two');
});
console.time('three');
fs.writeFile('./Names/array7.json', JSON.stringify(getNames(7000001)), 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
  console.timeEnd('three');
});
console.time('four');
fs.writeFile('./Names/array8.json', JSON.stringify(getNames(8000001)), 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
  console.timeEnd('four');
});
console.time('five');
fs.writeFile('./Names/array9.json', JSON.stringify(getNames(9000001)), 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
  console.timeEnd('five');
});
