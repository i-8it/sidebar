const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const router = require('./routes/sidebar.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/:nameOrId', express.static('public'));

app.use('/api/sidebar', router);
app.use(logger('dev'));

app.set('port', process.env.PORT || 3000);

module.exports = app;
