const db = require('../../database-postgres');

class Friends {
  static findFriendByUserId({ userId }) {
    db.friends.findFriendByUserId({ userId });
  }
}

module.exports = Friends;
