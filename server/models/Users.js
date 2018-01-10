const utils = require('../../lib/hashUtils');
const db = require('../../database-postgres');

class Users {
  create(username, password) {
    let salt = utils.createRandom32String();
    password = utils.createHash(password, salt);
    return db.users.createNewUser(username, password, salt)
      .then(() => true)
      .catch(() => false)
  }

  findById(userId) {
    return db.users.findByUserId(userId);
  }

  findByUsername(username) {
    return db.users.findByUsername(username);
  }

  updatePassword(username, newPassword) {
    let salt = utils.createRandom32String();
    let password = utils.createHash(newPassword, salt);
    return db.users.updateExistingUserPassword(username, password, salt);
  }
}

module.exports = new Users();
