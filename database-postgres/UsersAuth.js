const db = require('./config');

class UsersAuth {
  createUser({ password, salt }) {
    this.queryString = 'INSERT INTO users_auth (password, salt) VALUES ($1, $2)';
    return db.any(this.queryString, [password, salt]);
  }

  updatePassword({ usersAuthId, password, salt }) {
    this.queryString = 'UPDATE users_auth SET password = $2, salt = $3 WHERE id  = $1';
    return db.any(this.queryString, [usersAuthId, password, salt]);
  }

  findByUserId({ usersAuthId }) {
    this.queryString = 'SELECT * FROM users_auth WHERE id = $1 LIMIT 1';
    return db.any(this.queryString, [usersAuthId])
      .then(data => data[0]);
  }
}

module.exports = new UsersAuth();
