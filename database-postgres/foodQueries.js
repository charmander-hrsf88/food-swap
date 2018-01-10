const db = require('./config');
const usersAuth = require('./UsersAuth');

class Food {
  create({ name, description, userId }) {
    this.queryString = 'INSERT INTO food (name, description, userId) VALUES ($1, $2, $3)';
    return db.any(this.queryString, [name, description, userId]);
  }

  findByNameandDish({ name, dish }) {
    let results;
    if (dish === undefined) {
      this.queryString = 'SELECT * FROM food WHERE userId = (SELECT id FROM users WHERE name = name)';
      results = db.any(this.queryString, [name]);
    } else {
      this.queryString = 'SELECT * FROM food WHERE userId = (SELECT id FROM users WHERE name = name) AND dish = $2';
      results = db.any(this.queryString, [name, dish]);
    }
    return results;
  }

  findByUserNameandDish({ username, dish }) {
    let results;
    if (name === undefined) {
      this.queryString = 'SELECT * FROM food WHERE userId = (SELECT id for users WHERE name = name)';
      results = db.any(this.queryString, [username]);
    } else {
      this.queryString = 'SELECT * FROM food WHERE userId = (SELECT id for users WHERE name = name) AND dish = $2';
      results = db.any(this.queryString, [username, dish]);
    }
    return results;
  }

  findByDishName({ dish }) {
    this.queryString = 'SELECT * FROM food WHERE dish = $2';
    return db.any(this.queryString, [dish]);
  }

let food = new Food();
food.create({ name: 'Grilled cheese', username: 'wanchoi211', email: 'wanchoi211@gmail.com' }).then(() => user.findById(1)).then(user => console.log(user));
