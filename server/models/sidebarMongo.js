const { Restaurant } = require('../../Mongo/connectionMongo');

module.exports = {
  restaurants: {
    get: (nameOrId) => {
      if (isNaN(nameOrId)) {
        const name = nameOrId;
        console.log(name);
        return Restaurant.find({ name: name });
      }
      const id = nameOrId;
      return Restaurant.find({ _id: id });
    },

    post: (obj) => {
      const newObj = obj;
      return Restaurant.insertOne(newObj);
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
