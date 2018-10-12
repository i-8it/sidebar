const redis = require('redis');
const models = require('../models/sidebar');
const client = require('../redisConnection');

module.exports = {
  restaurants: {
    get: (req, res) => {
      models.restaurants.get(req.params.nameOrId, (results, err) => {
        if (err) {
          res.send(err);
        } else {
          client.set(req.params.nameOrId, JSON.stringify(results), redis.print);
          res.status(200).json(results);
          res.end();
        }
      });
    },

    post: (req, res) => {
      const newRestuarant = (req.body);
      models.restaurants.post(newRestuarant, (results) => {
        res.status(200).json(results);
        res.end();
      });
    },

    put: (req, res) => {
      models.restaurants.put(req.params.nameOrId, (results) => {
        res.status(200).json(results);
        res.end();
      });
    },

    delete: (req, res) => {
      models.restaurants.delete(req.params.nameOrId, (results) => {
        res.status(202).json(results);
        res.end();
      });
    },
  },
};
