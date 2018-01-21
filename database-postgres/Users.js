const db = require('./config');
class Users {
  static create({ userAuthId, name, username, email, rating }) {
    const queryString = 'INSERT INTO users (user_auth_id, name, username, email, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    return db.any(queryString, [userAuthId, name, username, email, rating]).then( users => users[0]);
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

  static edit({ userId, name, username, bio, email, picture }) {
    const promises = [];
    if (name !== undefined) {
      promises.push(db.query('UPDATE users SET name = $1 WHERE id = $2', [name, userId]));
    }

    if (username !== undefined) {
      promises.push(db.query('UPDATE users SET username = $1 WHERE id = $2', [username, userId]));
    }

    if (bio !== undefined) {
      promises.push(db.query('UPDATE users SET bio = $1 WHERE id = $2', [bio, userId]));
    }

    if (email !== undefined) {
      promises.push(db.query('UPDATE users SET email = $1 WHERE id = $2', [email, userId]));
    }

    if (picture !== undefined) {
      promises.push(db.query('UPDATE users SET picture = $1 WHERE id = $2', [picture, userId]));
    }

    return Promise.all(promises).then(() => db.query('SELECT * FROM users WHERE id = $1', [userId]));
  }
}

module.exports = Users;
