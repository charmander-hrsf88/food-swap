const db = require('../../database-postgres');

class Food {
  static create({ dishname, description, userId }) {
    return db.food.create({ dishname, description, userId });
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