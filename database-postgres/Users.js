const db = require('./config');

class Users {
  create({ userAuthId, name, username, email }) {
    this.queryString = 'INSERT INTO users (user_auth_id, name, username, email) VALUES ($1, $2, $3, $4)';
    return db.any(this.queryString, [userAuthId, name, username, email]);
  }

  findById({ id }) {
    this.queryString = 'SELECT * FROM users WHERE id = $1 LIMIT 1';
    return db.any(this.queryString, [id])
      .then((users) => {
        if (users.length === 0) {
          return null;
        }

        return users[0];
      });
  }

  findByAuthId({ userAuthId }) {
    this.queryString = 'SELECT * FROM users WHERE user_auth_id = $1 LIMIT 1';
    return db.any(this.queryString, [userAuthId])
      .then((users) => {
        if (users.length === 0) {
          return null;
        }

        return users[0];
      });
  }

  findByUsername({ username }) {
    this.queryString = 'SELECT * FROM users WHERE username = $1 LIMIT 1';
    return db.any(this.queryString, [username])
      .then((users) => {
        if (users.length === 0) {
          return null;
        }

        return users[0];
      });
  }
}

module.exports = new Users();
