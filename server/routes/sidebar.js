const express = require('express');
const router = express.Router();
const controllers = require('../controllers/sidebar.js');

router.get('/:nameOrId', controllers.restaurants.get);
router.post('/', controllers.restaurants.post);
router.delete('/:id', controllers.restaurants.delete);
router.put('/:id', controllers.restaurants.put);

module.exports = router;
