const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/27017');

const repoSchema = mongoose.Schema({
  _id: Number,
  name: String,
  priceRange: String,
  takesReservation: Boolean,
  Monday: String,
  Tuesday: String,
  Wednesday: String,
  Thursday: String,
  Friday: String,
  Saturday: String,
  Sunday: String,
});

const Restaurant = mongoose.model('restaurant', repoSchema);

const saveObj = (rest) => {
  const newRest = new Restaurant({
    _id: rest._id,
    name: rest.name,
    priceRange: rest.priceRange,
    takesReservation: rest.takesReservation,
    Monday: rest.Monday,
    Tuesday: rest.Tuesday,
    Wednesday: rest.Wednesday,
    Thursday: rest.Thursday,
    Friday: rest.Friday,
    Saturday: rest.Saturday,
    Sunday: rest.Sunday,
  });
  newRest.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('restaurant was saved!');
    }
  });
};

module.exports = { saveObj };
