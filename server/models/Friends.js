const db = require('../../database-postgres');

class Friends {
  static getAll({ userId1 }) {
    return db.friends.getAll({ userId1 });
  }

  static findByUserId({ userId1, userId2 }) {
    return db.friends.findByUserId({ userId1, userId2 });
  }

  static create({ userId1, userId2 }) {
    return db.friends.create({ userId1, userId2 });
  }

  static getFriendsByUserId({ userId }) {
    return db.friends.getFriendsByUserId({ userId });
  }
}

module.exports = Friends;
