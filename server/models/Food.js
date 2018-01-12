const db = require('../../database-postgres');

class Food {
  static create({ dishname, description, userId }) {
    return db.food.create({ dishname, description, userId });
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
}

module.exports = Food;
