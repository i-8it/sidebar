const router = require('express').Router();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const controllers = require('../controllers/nonORM.js');

router.get('/restaurants/:nameOrId', controllers.restaurants.get);
router.post('/restaurants/', urlencodedParser, controllers.restaurants.post);
router.delete('/restaurants/:nameOrId', controllers.restaurants.delete);
router.put('/restaurants/:nameOrId', controllers.restaurants.put);

module.exports = router;
