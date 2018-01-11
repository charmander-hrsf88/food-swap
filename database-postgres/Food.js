const db = require('./config');

class Food {
  static create({ dishname, description, userId }) {
    const queryString = 'INSERT INTO food (dishname, description, user_id) VALUES ($1, $2, $3)';
    return db.any(queryString, [dishname, description, userId]);
  }

  static findByNameandDishName({ name, dishname }) {
    const queryString;
    if (dishname === undefined) {
      queryString = 'SELECT * FROM food WHERE user_id = (SELECT id FROM users WHERE name = $1)';
      return db.any(queryString, [name]);
    }

    queryString = 'SELECT * FROM food WHERE user_id = (SELECT id FROM users WHERE name = $1) AND dishname = $2';
    return db.any(queryString, [name, dishname]);
  }

  static findByUserNameandDishName({ username, dishname }) {
    const queryString;

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

exports = Food;
