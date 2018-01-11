const db = require('./config');

class Friends {
  static findFriendByUserId({ userId }) {
    const queryString = 'SELECT * FROM friends WHERE user_id2 = $1';
    return db.any(queryString, [userId]);
  }
}

exports = Friends;
