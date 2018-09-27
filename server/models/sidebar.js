const { Restaurant } = require('../../database/index');

module.exports = {
  restaurants: {
    get: (nameOrId) => {
      if (isNaN(nameOrId)) {
        const name = nameOrId;
        return Restaurant.findAll({ where: { name } });
      }
      const id = nameOrId;
      return Restaurant.findAll({ where: { id } });
    },
    post: obj => Restaurant.build(obj),
    put: (nameOrId) => {
      Restaurant.findAll({ where: { nameOrId } })
        .on('success', (restaurant) => {
          if (restaurant) {
            restaurant.updateAttributes({
              title: 'a very different title now',
            })
              .success(() => console.log('updated'))
              .error(() => console.log('error'));
          }
        });
    },
    delete: (nameOrId) => {
      if (isNaN(nameOrId)) {
        const name = nameOrId;
        return Restaurant.destroy({ where: { name } });
      }
      const id = nameOrId;
      return Restaurant.destroy({ where: { id } });
    },
  },
};
