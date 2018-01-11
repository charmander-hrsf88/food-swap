const db = require('./config');

class Friends {
  findFriendByUserId({ userId }) {
    this.queryString = 'SELECT * FROM friends WHERE user_id2 = $1';
    return db.any(this.queryString, [userId]);
  }
}

exports = new Friends();
