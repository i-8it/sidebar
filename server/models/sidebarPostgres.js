const { restaurants } = require('../../Postgress/connection');

module.exports = {
  restaurants: {
    get: (nameOrId) => {
      if (isNaN(nameOrId)) {
        const name = nameOrId.replace(/('num')/g, '#');
        return restaurants.findAll({ where: { name } });
      }
      const id = nameOrId;
      return restaurants.findAll({ where: { id } });
    },

    post: (obj) => {
      const newObj = obj;
      return restaurants.insertOne(newObj);
    },

    put: (nameOrId) => {
      if (isNaN(nameOrId)) {
        const name = nameOrId;
        return restaurants.findAll({ where: { name } })
          .on('success', (restaurant) => {
            if (restaurant) {
              restaurant.updateAttributes({
                name: 'a very different title now',
              }).save()
                .success(() => console.log('updated'))
                .error(() => console.log('error'));
            }
          });
      }
      const id = nameOrId;
      return restaurants.findAll({ where: { id } })
        .on('success', (restaurant) => {
          if (restaurant) {
            restaurant.updateAttributes({
              name: 'a very different title now',
            }).save()
              .success(() => console.log('updated'))
              .error(() => console.log('error'));
          }
        });
    },

    delete: (nameOrId) => {
      console.log('deleting');
      if (isNaN(nameOrId)) {
        const name = nameOrId;
        return Restaurant.destroy({ where: { name } });
      }
      const id = nameOrId;
      return Restaurant.destroy({ where: { id } });
    },
  },
};
