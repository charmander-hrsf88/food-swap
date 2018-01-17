const pgp = require('pg-promise')();

const config = {
  connectionString: process.env.DATABASE_URL,
  databse: 'food_swap',
  ssl: true,
};

const db = pgp(config);

module.exports = db;
