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
    const { dishname, description, picture, userId } = req.body;

    if (dishname.length > 25) {
      res.send({ message: 'dishname too long' });
    }

    models.food.create({ dishname, description, picture, userId })
      .then((food) => {
        res.json(food);
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static getByUsername(req, res) {
    const { username } = req.params;
    models.food.getByUsername({ username })
      .then((foods) => {
        res.json(foods);
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static getByUserId(req, res) {
    const { userId } = req.params;
    models.food.getByUserId({ userId })
      .then((foods) => {
        res.json(foods);
      })
      .catch((e) => {
        res.status(500).send({ error : e });
      });
  }
}

module.exports = Food;
