const db = require('../../database-postgres');

class Food {
  static create({ dishname, description, picture, userId }) {
    return db.food.create({ dishname, description, picture, userId });
  }

  static getAll() {
    return db.food.getAll();
  }

  static findById({ id }) {
    return db.food.findById({ id });
  }

  static findByNameandDishName({ name, dishname }) {
    return db.food.findByNameandDishName({ name, dishname });
  }

  static findByUserNameandDishName({ username, dishname }) {
    return db.food.findByUserNameandDishName({ username, dishname });
  }

  static findByDishName({ dishname }) {
    return db.food.findByDishName({ dishname });
  }

  static getByUsername({ username }) {
    return db.food.getByUsername({ username });
  }

  static getByUserId({ userId }) {
    return db.food.getByUserId({ userId });
  }
}

module.exports = Food;
