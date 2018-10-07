const generateRandomInt = (max, min = 0) => min + Math.floor(Math.random() * Math.floor(max - min));
const generateRandomBoolean = (offset = 0.5) => Math.floor(offset + Math.random()) > 0;

const generateRestaurantInfo = (allRestaurants, arr, prefix) => {
  const open = ['7:00 am', '7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am'];
  const midDayClose = ['1:30 pm', '2:00 pm', '2:30 pm'];
  const midDayOpen = ['4:00 pm', '4:30 pm', '5:30 pm', '6:00 pm'];
  const close = ['10:00 pm', '10:30 pm', '11:00 pm', '11:30 pm'];
  for (let i = 0; i < allRestaurants.length / 20; i++) {
    if (i === 500000) {
      console.log('half');
    }
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
    arr.push({
      _id: i + prefix,
      name: allRestaurants[i],
      priceRange: generateRandomInt(4),
      healthScore: generateRandomInt(101, 50),
      takesReservation: generateRandomBoolean(),
      Monday: weekday,
      Tuesday: weekday,
      Wednesday: weekday,
      Thursday: weekday,
      Friday: weekday,
      Saturday: weekend,
      Sunday: weekend,
    });
  }
};


module.exports = { generateRestaurantInfo };
