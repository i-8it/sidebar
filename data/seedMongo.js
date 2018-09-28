const { saveObj } = require('./connectionMongo.js');

const data = {
  _id: 1,
  name: 'cristabel\'s handcrafted chips and dip',
  priceRange: 3,
  healthScore: 96,
  takesReservation: false,
  Monday: '10:00 am - 2:30 pm, 4:30 pm - 10:30 pm',
  Tuesday: '10:00 am - 2:30 pm, 4:30 pm - 10:30 pm',
  Wednesday: '10:00 am - 2:30 pm, 4:30 pm - 10:30 pm',
  Thursday: '10:00 am - 2:30 pm, 4:30 pm - 10:30 pm',
  Friday: '10:00 am - 2:30 pm, 4:30 pm - 10:30 pm',
  Saturday: '10:00 am - 2:30 pm, 4:30 pm - 10:30 pm',
  Sunday: '10:00 am - 2:30 pm, 4:30 pm - 10:30 pm',
};

saveObj(data);
