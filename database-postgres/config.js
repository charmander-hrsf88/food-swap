const pgp = require('pg-promise')();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'food_swap',
  user: 'charmander',
};

const db = pgp(config);

module.exports = db;
