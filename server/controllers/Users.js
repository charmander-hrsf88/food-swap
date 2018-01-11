class Users {
  static getAll(req, res) {
    res.end('got all the users');
  }

  static getById(req, res) {
    res.end('got one user with id');
  }

  static post(req, res) {
    res.end('create a new user');
  }
}

module.exports = Users;
