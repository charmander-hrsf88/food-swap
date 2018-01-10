const db = require('./config');

class UsersAuth {
  createUser(userId, password, salt) {
    const queryString = 'INSERT INTO users_auth (userId, password, salt) VALUES ($1, $2, $3)';
    return db.any(queryString, [userId, password, salt]);
  }

  updatePassword(userId, newPassword) {
    const queryString = 'UPDATE users_auth SET password = $2 WHERE userId = $1';
    return db.any(queryString, [userId, newPassword])
  }

  findByUserId(userId) {
    const queryString = 'SELECT * FROM users_auth WHERE userId = $1 LIMIT 1';
    return db.any(queryString, [userId])
              .then(data => data[0])
  }
}

module.exports = new UsersAuth();
