const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const client = require('./redisConnection');


const app = express();
const router = require('./routes/sidebar.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.use('/loaderio-89cd58c52fc0a961ea0df9d910607317.txt', (req, res) => {
  res.send('loaderio-89cd58c52fc0a961ea0df9d910607317');
});

app.use('/:nameOrId', express.static('public'));

const cache = (req, res, next) => {
  const key = req.params.nameOrId;
  client.get(key, (err, data) => {
    if (err) {
      console.log (err);
      next();
    }
    if (data && data!=null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

app.get('/api/sidebar/restaurants/:nameOrId', cache);
app.use('/api/sidebar', router);

app.set('port', process.env.PORT || 3000);

module.exports = app;
