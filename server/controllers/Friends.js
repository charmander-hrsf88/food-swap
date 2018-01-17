const models = require('../models');

class Friend {
  static getAll(req, res) {
    const { userId1 } = req.params;
    models.friends.getAll({ userId1 })
      .then((friends) => {
        res.json(friends);
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static getById(req, res) {
    const { userId1, userId2 } = req.params;
    models.friends.findByUserId({ userId1, userId2 })
      .then((friend) => {
        res.json(friend);
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static create(req, res) {
    const { userId1, userId2 } = req.body;
    models.friends.create({ userId1, userId2 })
      .then(() => {
        res.send('SUCESSS');
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }
}

module.exports = Friend;
