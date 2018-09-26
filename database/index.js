const Sequelize = require('sequelize');

const db = new Sequelize('YelpReactorSidebar', 'root', 'password', {
  dialect: 'mysql',
});

const Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  priceRange: Sequelize.INTEGER, // 0-3
  healthScore: Sequelize.INTEGER, // 50-100
  takesReservation: Sequelize.BOOLEAN,
  Monday: Sequelize.STRING,
  Tuesday: Sequelize.STRING,
  Wednesday: Sequelize.STRING,
  Thursday: Sequelize.STRING,
  Friday: Sequelize.STRING,
  Saturday: Sequelize.STRING,
  Sunday: Sequelize.STRING,
}, { timestamps: false });

module.exports = {
  db,
  Restaurant,
};
