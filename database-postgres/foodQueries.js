const db = require('./config');
const usersAuth = require('./UsersAuth');

class Food {
  create({ name, description, userId }) {
    this.queryString = 'INSERT INTO food (name, description, userId) VALUES ($1, $2, $3)';
    return db.any(this.queryString, [name, description, userId]);
  }

  findByIdandDish({ userId, name }) {
    let results;
    if (name === undefined) {
      this.queryString = 'SELECT * FROM food WHERE userId = $1';
      results = db.any(this.queryString, [userId]);
    } else {
      this.queryString = 'SELECT * FROM food WHERE userId = $1 AND name = $2';
      results = db.any(this.queryString, [userId, name]);
    }
    return results;
  }

  findByDishName({ dish }) {
    this.queryString = 'SELECT * FROM food WHERE dish = $2';
    return db.any(this.queryString, [dish]);
  }

let food = new Food();
food.create({ name: 'Grilled cheese', username: 'wanchoi211', email: 'wanchoi211@gmail.com' }).then(() => user.findById(1)).then(user => console.log(user));
