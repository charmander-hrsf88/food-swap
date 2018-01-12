const db = require('./config');

class Friends {
  static getAll({ userId1 }) {
    const queryString = 'SELECT * FROM friends where user_id1 = $1 OR user_id2 = $1';
    return db.any(queryString, [userId1]);
  }

  static findByUserId({ userId1, userId2 }) {
    const queryString = 'SELECT * FROM friends WHERE (user_id1 = $1 AND user_id2 = $2) OR (user_id2 = $1 AND user_id1 = $2)';
    return db.any(queryString, [userId1, userId2])
      .then((friends) => {
        if (friends.length === 0) {
          return null;
        }

        return friends[0];
      });
  }

  static create({ userId1, userId2 }) {
    const queryString = 'INSERT INTO friends (user_id1, user_id2) VALUES ($1, $2)';
    return db.any(queryString, [userId1, userId2]);
  }
}

module.exports = Friends;
