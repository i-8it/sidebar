const router = require('express').Router();
const controllers = require('../controllers/sidebar.js');

router.get('/restaurants/:nameOrId', controllers.restaurants.get);
router.post('/restaurants', controllers.restaurants.post);
router.delete('/restaurants/:nameOrId', controllers.restaurants.delete);
router.put('/restaurants/:nameOrId', controllers.restaurants.put);

module.exports = router;
