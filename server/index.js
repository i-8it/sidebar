const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = require('./routes/sidebar.js');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/:nameOrId', express.static('public'));

app.use('/api/sidebar', router);

app.set('port', process.env.PORT || 3000);

module.exports = app;
