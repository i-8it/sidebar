const models = require('../models/nonORM');

module.exports = {
  restaurants: {
    get: (req, res) => {
      models.restaurants.get(req.params.nameOrId, (err, results) => {
        if (err) {
          console.log(err);
          res.send(err);
        }
        res.status(200).json(results);
        res.end();
      });
    },

    post: (req, res) => {
      console.log(req);
      const newRestuarant = (req.body);
      console.log(newRestuarant);
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
