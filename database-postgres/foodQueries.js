const db = require('./config');
const usersAuth = require('./UsersAuth');

class Food {
  create({ dishname, description, user_id }) {
    this.queryString = 'INSERT INTO food (name, description, userId) VALUES ($1, $2, $3)';
    return db.any(this.queryString, [name, description, userId]);
  }

  findByNameandDishName({ name, dishname }) {
    let results;
    if (dishname === undefined) {
      this.queryString = 'SELECT * FROM food WHERE userId = (SELECT id FROM users WHERE name = $1)';
      results = db.any(this.queryString, [name]);
    } else {
      this.queryString = 'SELECT * FROM food WHERE userId = (SELECT id FROM users WHERE name = $1) AND dishname = $2';
      results = db.any(this.queryString, [name, dishname]);
    }
    return results;
  }

  findByUserNameandDishName({ userName, dishname }) {
    let results;
    if (dishname === undefined) {
      this.queryString = 'SELECT * FROM food WHERE userId = (SELECT id FROM users WHERE userName = $1)';
      results = db.any(this.queryString, [userName]);
    } else {
      this.queryString = 'SELECT * FROM food WHERE userId = (SELECT id FROM users WHERE userName = $1) AND dishname = $2';
      results = db.any(this.queryString, [userName, dishname]);
    }
    return results;
  }

  findByDishName({ dishname }) {
    this.queryString = 'SELECT * FROM food WHERE dishname = $2';
    return db.any(this.queryString, [userName, dishname]);
  }

let food = new Food();
food.create({ dishname: 'Grilled cheese', description: 'Two pieces of bread and melted cheese in between.', user_id: '0' }).then(() => food.findByNameandDishName('Grilled cheese')).then(food => console.log(food));
