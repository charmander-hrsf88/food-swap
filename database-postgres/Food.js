const db = require('./config');

class Food {
  static create({ dishname, description, userId }) {
    const queryString = 'INSERT INTO food (dishname, description, user_id) VALUES ($1, $2, $3)';
    return db.any(queryString, [dishname, description, userId])
      .then(() => true)
      .catch(() => false);
  }

  static getAll() {
    const queryString = 'SELECT * FROM food';
    return db.any(queryString);
  }

  static findById({ id }) {
    const queryString = 'SELECT * FROM food WHERE id = $1 LIMIT 1';
    return db.any(queryString, [id])
      .then((foods) => {
        if (foods.lengh === 0) {
          return null;
        }

        return foods[0];
      });
  }

  static findByNameandDishName({ name, dishname }) {
    let queryString;

    if (dishname === undefined) {
      queryString = 'SELECT * FROM food WHERE user_id = (SELECT id FROM users WHERE name = $1)';
      return db.any(queryString, [name]);
    }

    queryString = 'SELECT * FROM food WHERE user_id = (SELECT id FROM users WHERE name = $1) AND dishname = $2';
    return db.any(queryString, [name, dishname]);
  }

  static findByUserNameandDishName({ username, dishname }) {
    let queryString;

    if (dishname === undefined) {
      queryString = 'SELECT * FROM food WHERE user_id = (SELECT id FROM users WHERE userName = $1)';
      return db.any(queryString, [username]);
    }

    queryString = 'SELECT * FROM food WHERE user_id = (SELECT id FROM users WHERE userName = $1) AND dishname = $2';
    return db.any(queryString, [username, dishname]);
  }

  static findByDishName({ dishname }) {
    const queryString = 'SELECT * FROM food WHERE dishname = $1';
    return db.any(queryString, [dishname]);
  }
}

module.exports = Food;
