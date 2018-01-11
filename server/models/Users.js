const utils = require('../../lib/hashUtils');
const db = require('../../database-postgres');

class Users {
  create({ name, username, password, email }) {
    let salt = utils.createRandom32String();
    password = utils.createHash(password, salt);
    return db.users.create({ name, username, email }))
      .then(() => db.users)
      .catch(() => false)
  }

  findById({ userId }) {
    return db.users.findByUserId({ userId });
  }

  findByUsername({ username }) {
    return db.users.findByUsername({ username });
  }

  updatePassword({ userId, password }) {
    let salt = utils.createRandom32String();
    password = utils.createHash(password, salt);
    return db.usersAuth.updatePassword({ userId, password, salt });
  }
}

const user = new Users();
user.create({name: 'hayden', username:'hmarx', password:'abc', email:'hmarx@gmail.com'}).then(result => console.log(result));
module.exports = new Users();
