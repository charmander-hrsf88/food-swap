const db = require('./config');
class Users {
  static create({ userAuthId, name, username, email }) {
    const queryString = 'INSERT INTO users (user_auth_id, name, username, email) VALUES ($1, $2, $3, $4) RETURNING *';
    return db.any(queryString, [userAuthId, name, username, email]).then( users => users[0]);
  }

  static findById({ id }) {
    const queryString = 'SELECT * FROM users WHERE id = $1 LIMIT 1';
    return db.any(queryString, [id])
      .then((users) => {
        if (users.length === 0) {
          return null;
        }

        return users[0];
      });
  }

  static findByAuthId({ userAuthId }) {
    const queryString = 'SELECT * FROM users WHERE user_auth_id = $1 LIMIT 1';
    return db.any(queryString, [userAuthId])
      .then((users) => {
        if (users.length === 0) {
          return null;
        }

        return users[0];
      });
  }

  static findByUsername({ username }) {
    const queryString = 'SELECT * FROM users WHERE username = $1 LIMIT 1';
    return db.any(queryString, [username])
      .then((users) => {
        if (users.length === 0) {
          return null;
        }

        return users[0];
      });
  }

  static getAllUsers() {
    const queryString = 'SELECT * FROM users';
    return db.any(queryString)
      .then((users) => {
        if (users.length === 0) {
          return null;
        }

        return users;
      });
  }
}

module.exports = Users;
