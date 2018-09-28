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

    post: (obj) => {
      const newObj = obj;
      return Restaurant.build(newObj).save();
    },

    put: (nameOrId) => {
      if (isNaN(nameOrId)) {
        const name = nameOrId;
        return Restaurant.findAll({ where: { name } })
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
      return Restaurant.findAll({ where: { id } })
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
