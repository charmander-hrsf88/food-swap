const models = require('../models');

class Users {
  static getAll(req, res) {
    models.users.getAllUsers()
      .then((users) => {
        res.json(users);
      })
      .catch((e) => {
        res.status(404).send({ error: e });
      });
  }

  static getById(req, res) {
    const { id } = req.params;
    models.users.findById({ id })
      .then((user) => {
        res.json(user);
      })
      .catch((e) => {
        res.status(404).send({ error: e });
      });
  }

  static getByUsername(req, res) {
    const { username } = req.params;
    models.users.findByUsername({ username })
      .then((user) => {
        res.json(user);
      })
      .catch((e) => {
        res.status(404).send({ error: e });
      });
  }

  static create(req, res) {
    const { name, username, password, email } = req.body;
    models.users.create({ name, username, password, email })
      .then(() => {
        res.end('OK');
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }
}

module.exports = Users;
