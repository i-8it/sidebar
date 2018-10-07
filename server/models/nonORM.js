const { pgClient } = require('../../Postgress/nonORM');

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
// const obj = {
//   Friday: '9:00 am - 1:30 pm, 6:00 pm - 10:00 pm',
//   Monday: '9:00 am - 1:30 pm, 6:00 pm - 10:00 pm',
//   Saturday: '9:00 am - 1:30 pm, 6:00 pm - 10:00 pm',
//   Sunday: '9:00 am - 1:30 pm, 6:00 pm - 10:00 pm',
//   Thursday: '9:00 am - 1:30 pm, 6:00 pm - 10:00 pm',
//   Tuesday: '9:00 am - 1:30 pm, 6:00 pm - 10:00 pm',
//   Wednesday: '9:00 am - 1:30 pm, 6:00 pm - 10:00 pm',
//   healthScore: 50,
//   id: 10000002,
//   name: 'Celeste',
//   priceRange: 1,
//   takesReservation: true,
// };

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
        console.log('THIS IS THE ID', id);
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
