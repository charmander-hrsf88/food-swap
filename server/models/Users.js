const utils = require('../../lib/hashUtils');
const db = require('../../database-postgres');

class Users {
  static create({ name, username, password, email }) {
    const salt = utils.createRandom32String();
    const hash = utils.createHash(password, salt);
    return db.usersAuth.createUser({ password: hash, salt })
      .then(({ id }) => db.users.create({ userAuthId: id, name, username, email }))
      .then(() => true)
      .catch(() => false);
  }

  static findById({ id }) {
    return db.users.findByUserId({ id });
  }

  static findByUsername({ username }) {
    return db.users.findByUsername({ username });
  }

  static updatePassword({ userAuthId, password }) {
    const salt = utils.createRandom32String();
    const hash = utils.createHash(password, salt);
    return db.usersAuth.updatePassword({ userAuthId, password: hash, salt });
  }

  static getAllUsers() {
    return db.users.getAllUsers();
  }
}

module.exports = Users;
