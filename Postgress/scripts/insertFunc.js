const { pgClient } = require('../connection.js');

const readThis = '../data/RestaurantObjs/10Mill.json';

pgClient.connect();

const insertRestaurant = (array, prefix) => {
  array.forEach((restaurant, index) => {
    const name = restaurant.name.replace(/(\')/g, "''");
    const q = `INSERT INTO restaurants (id, name, pricerange, healthscore,
    takesreservation, monday, tuesday, wednesday, thursday, friday, saturday, sunday
            ) values (${restaurant._id}, '${name}', '${restaurant.priceRange}', 
            ${restaurant.healthScore}, ${restaurant.takesReservation},
            '${restaurant.Monday}', '${restaurant.Tuesday}', '${restaurant.Wednesday}','${restaurant.Thursday}', 
            '${restaurant.Friday}', '${restaurant.Saturday}', '${restaurant.Sunday}')`;
    if (index % 20000 === 0) {
      console.log(`${prefix} twenty thousand ${index}`);
    }
    pgClient.query(q, (error) => {
      if (error) {
        throw error;
      }
    });
  });
};

module.exports = { readThis, insertRestaurant };
