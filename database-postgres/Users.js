const db = require('./config');
const usersAuth = require('./UsersAuth');

class Users {
  create({ userAuthId, name, username, email }) {
    const queryString = 'INSERT INTO users (user_auth_id, name, username, email) VALUES ($1, $2, $3, $4)';
    return db.any(queryString, [userAuthId, name, username, email]);
  }

  findById({ id }) {
    const queryString = 'SELECT * FROM users WHERE id = $1 LIMIT 1';
    return db.any(queryString, [id]).then(users => users.length === 0 ? null : users[0]);
  }

  findByAuthId({ userAuthId }) {
    const queryString = 'SELECT * FROM users WHERE user_auth_id = $1 LIMIT 1';
    return db.any(queryString, [userAuthId]).then(users => users.length === 0 ? null : users[0]);
  }

  findByUsername({ username }) {
    const queryString = 'SELECT * FROM users WHERE username = $1 LIMIT 1';
    return db.any(queryString, [username]).then(users => users.length === 0 ? null : users[0]);
  }
}

module.exports = new Users();
