const db = require('./config');
const usersAuth = require('./UsersAuth');

class Users {
  create({ name, username, email }) {
    const queryString = 'INSERT INTO users (name, username, email) VALUES ($1, $2, $3)';
    return db.any(queryString, [name, username, email]);
  }

  findById({ id }) {
    const queryString = 'SELECT * FROM users WHERE id = $1 LIMIT 1';
    return db.any(queryString, [id])
  }

  findByUsername({ username }) {
    const queryString = 'SELECT * FROM users WHERE username = $1 LIMIT 1';
    return db.any(queryString, [username])
  }
}

const user = new Users();
user.create({ name: 'alex', username: 'wanchoi211', email: 'wanchoi211@gmail.com' }).then(() => user.findById(1)).then(user => console.log(user));
