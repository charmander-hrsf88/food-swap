const db = require('./config');

class Food {
  create({ dishname, description, userId }) {
    this.queryString = 'INSERT INTO food (dishname, description, user_id) VALUES ($1, $2, $3)';
    return db.any(this.queryString, [dishname, description, userId]);
  }

  findByNameandDishName({ name, dishname }) {
    if (dishname === undefined) {
      this.queryString = 'SELECT * FROM food WHERE user_id = (SELECT id FROM users WHERE name = $1)';
      return db.any(this.queryString, [name]);
    }

    this.queryString = 'SELECT * FROM food WHERE user_id = (SELECT id FROM users WHERE name = $1) AND dishname = $2';
    return db.any(this.queryString, [name, dishname]);
  }

  findByUserNameandDishName({ username, dishname }) {
    if (dishname === undefined) {
      this.queryString = 'SELECT * FROM food WHERE user_id = (SELECT id FROM users WHERE userName = $1)';
      return db.any(this.queryString, [username]);
    }

    this.queryString = 'SELECT * FROM food WHERE user_id = (SELECT id FROM users WHERE userName = $1) AND dishname = $2';
    return db.any(this.queryString, [username, dishname]);
  }

  findByDishName({ dishname }) {
    this.queryString = 'SELECT * FROM food WHERE dishname = $1';
    return db.any(this.queryString, [dishname]);
  }
}

exports = new Food();
