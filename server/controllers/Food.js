const models = require('../models');

class Food {
  static getAll(req, res) {
    models.food.getAll()
      .then((foods) => {
        res.json(foods);
      })
      .catch((e) => {
        res.status(404).send({ error: e });
      });
  }

  static getById(req, res) {
    const { id } = req.params;
    models.food.findById({ id })
      .then((food) => {
        res.json(food);
      })
      .catch((e) => {
        res.status(404).send({ error: e });
      });
  }

  static post(req, res) {
    const { dishname, description, userId } = req.body;
    models.food.create({ dishname, description, userId })
      .then(() => {
        res.end('OK');
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }
}

module.exports = Food;
