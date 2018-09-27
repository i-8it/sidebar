const models = require('../models/sidebar');

module.exports = {
  restaurants: {
    get: (req, res) => {
      models.restaurants.get(req.params.nameOrId)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    },

    post: (req, res) => {
      const newRestuarant = JSON.parse(req.body.review);
      models.restaurants.post(newRestuarant)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    },

    put: (req, res) => {
      models.restaurants.put(req.params.nameOrId)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    },

    delete: (req, res) => {
      models.restaurants.delete(req.params.nameOrId)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    },
  },
};
