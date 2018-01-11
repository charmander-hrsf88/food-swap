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

  static findById({ userId }) {
    return db.users.findByUserId({ userId });
  }

  static findByUsername({ username }) {
    return db.users.findByUsername({ username });
  }

  static updatePassword({ userId, password }) {
    const salt = utils.createRandom32String();
    const hash = utils.createHash(password, salt);
    return db.usersAuth.updatePassword({ userId, password: hash, salt });
  }
}


console.log(Users.create({name: 'hayden', username:'hmarx', password:'abcddddd', email:'hmarx@gmail.com'}));
module.exports = Users;
