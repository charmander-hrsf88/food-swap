const pgp = require('pg-promise')();

const configObj = {
  host: 'localhost',
  port: 5432,
  database: 'food_swap',
  user: 'charmander'
};

const db = pgp(configObj);

module.exports.db = db;
