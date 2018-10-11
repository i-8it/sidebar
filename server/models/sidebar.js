const { pgClient } = require('../../Postgress/connection');

const getQuery = (q, cb) => {
  pgClient.query(q, (err, data) => {
    if (err) {
      console.log(err);
    }
    cb(data.rows[0]);
  });
};
const postQuery = (q, cb) => {
  pgClient.query(q, (err, data) => {
    if (err) {
      console.log(err);
    }
    cb(data);
  });
};

module.exports = {
  restaurants: {
    get: (nameOrId, cb) => {
      if (isNaN(nameOrId)) {
        let name = nameOrId.replace('num', '#');
        name = name.replace("'", "''");
        const q = `SELECT * FROM restaurants WHERE (name = '${name}')`;
        getQuery(q, cb);
      } else {
        const id = nameOrId;
        const q = `SELECT * FROM restaurants WHERE (id =${id})`;
        getQuery(q, cb);
      }
    },

    post: (obj, cb) => {
      const q = `INSERT INTO restaurants VALUES
      (${obj.id},'${obj.name}',${obj.priceRange},${obj.healthScore},${obj.takesReservation},'${obj.Monday}','${obj.Tuesday}','${obj.Wednesday}',
        '${obj.Thursday}', '${obj.Friday}', '${obj.Saturday}', '${obj.Sunday}')`;
      postQuery(q, cb);
    },

    put: (nameOrId, cb) => {
      if (isNaN(nameOrId)) {
        let name = nameOrId.replace('num', '#');
        name = name.replace("'", "''");
        const q = `UPDATE "restaurants" SET "priceRange" = 4 WHERE name = '${name}'`;
        getQuery(q, cb);
      } else {
        const id = nameOrId;
        const q = `UPDATE "restaurants" SET "priceRange" = 4 WHERE id = ${id}`;
        getQuery(q, cb);
      }
    },

    delete: (nameOrId, cb) => {
      if (isNaN(nameOrId)) {
        let name = nameOrId.replace('num', '#');
        name = name.replace("'", "''");
        const q = `DELETE FROM restaurants WHERE (name = '${name}')`;
        getQuery(q, cb);
      } else {
        const id = nameOrId;
        const q = `DELETE FROM restaurants WHERE (id = ${id})`;
        getQuery(q, cb);
      }
    },
  },
};
