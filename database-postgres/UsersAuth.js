const db = require('./config');

class UsersAuth {
  static createUser({ password, salt }) {
    const queryString = 'INSERT INTO users_auth (password, salt) VALUES ($1, $2)';
    return db.any(queryString, [password, salt]);
  }

  static updatePassword({ usersAuthId, password, salt }) {
    const queryString = 'UPDATE users_auth SET password = $2, salt = $3 WHERE id  = $1';
    return db.any(queryString, [usersAuthId, password, salt]);
  }

  static findByUserId({ usersAuthId }) {
    const queryString = 'SELECT * FROM users_auth WHERE id = $1 LIMIT 1';
    return db.any(queryString, [usersAuthId])
      .then(data => data[0]);
  }
}

module.exports = UsersAuth;
