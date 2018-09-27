const faker = require('faker');
const fs = require('fs');

const generateRandomInt = (max, min = 0) => min + Math.floor(Math.random() * Math.floor(max - min));

const generateRandomBoolean = (offset = 0.5) => Math.floor(offset + Math.random()) > 0;


const genFunc = () => {
  const restaurantData = [];
  const open = ['7:00 am', '7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am'];
  const midDayClose = ['1:30 pm', '2:00 pm', '2:30 pm'];
  const midDayOpen = ['4:00 pm', '4:30 pm', '5:30 pm', '6:00 pm'];
  const close = ['10:00 pm', '10:30 pm', '11:00 pm', '11:30 pm'];


  for (let i = 0; i < 10; i += 1) {
    fs.readFile('./food1.json', 'utf8', (err, data) => {
      if (err) {
        console.log('error');
      } else {
        const obj = JSON.parse(data);
        const name = obj[i];
        let weekday;
        let weekend;
        if (generateRandomBoolean()) {
          weekday = `${open[generateRandomInt(open.length)]} - ${close[generateRandomInt(close.length)]}`;
        } else {
          weekday = `${open[generateRandomInt(open.length)]} - ${midDayClose[generateRandomInt(midDayClose.length)]}, `
                    + `${midDayOpen[generateRandomInt(midDayOpen.length)]} - ${close[generateRandomInt(close.length)]}`;
        }
        if (generateRandomBoolean()) {
          weekend = weekday;
        } else {
          weekend = `${open[generateRandomInt(open.length)]} - ${close[generateRandomInt(close.length)]}`;
        }

        restaurantData.push({
          name,
          priceRange: generateRandomInt(4),
          healthScore: generateRandomInt(101, 50),
          hasCertificate: generateRandomBoolean(0.15),
          takesReservation: generateRandomBoolean(),
          hasTakeout: generateRandomBoolean(),
          hasDelivery: generateRandomBoolean(),
          Monday: weekday,
          Tuesday: weekday,
          Wednesday: weekday,
          Thursday: weekday,
          Friday: weekday,
          Saturday: weekend,
          Sunday: weekend,
        });
      }
    });
  }

  return restaurantData;
};

// const getNames = () => {
//   const names = [];
//   for (let i = 0; i < 1000000; i++) {
//     names.push((`${faker.name.firstName()}'s ${faker.commerce.productAdjective()} ${foods[Math.round(Math.random() * 281)]}`).toLowerCase());
//     if (i === 1000000) {
//       console.log('at ONE MILLION');
//     } else if (i === 5000000) {
//       console.log('at FIVE MILLION');
//     } else if (i === 7000000) {
//       console.log('at SEVEN MILLION');
//     } else if (i === 9000000) {
//       console.log('at NINE MILLION');
//     }
//   }
//   return names;
// };

module.exports = {
  genFunc,
};
