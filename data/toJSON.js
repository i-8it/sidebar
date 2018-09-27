const fs = require('fs');
const { genFunc } = require('./generate.js');

const content = JSON.stringify(genFunc());

console.time('one');
fs.writeFile('set1.json', content, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
  console.timeEnd('one');
});
