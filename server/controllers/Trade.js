const models = require('../models');

class Trade {
  static getTradesById(req, res) {
    const { id } = req.params;
    models.trade.getTradesById({ id })
      .then((trades) => {
        res.json(trades);
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }
  static getTradesByUsername(req, res) {
    const { username } = req.params;
    models.trade.getTradesByUsername({ username })
      .then((trades) => {
        res.json(trades);
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static getTradesByUserId(req, res) {
    const { userId } = req.params;
    models.trade.getTradesByUserId({ userId })
      .then((trades) => {
        res.json(trades);
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static getTradesByTwoUsernames(req, res) {
    const { username1, username2 } = req.params;
    models.trade.getTradesByTwoUsernames({ username1, username2 })
      .then((trades) => {
        res.json(trades);
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static getTradesByTwoUserIds(req, res) {
    const { userId1, userId2 } = req.params;
    models.trade.getTradesByTwoUserIds({ userId1, userId2 })
      .then((trades) => {
        res.json(trades);
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static initiate(req, res) {
    const { userId1, userId2, foodId1, foodId2 } = req.body;
    models.trade.initiate({ userId1, userId2, foodId1, foodId2 })
      .then(() => {
        res.end('OK');
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static accept(req, res) {
    const { id } = req.body;
    models.trade.accept({ id })
      .then(() => {
        res.end({ message: 'Trade accepted' });
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static reject(req, res) {
    const { id } = req.body;
    models.trade.reject({ id })
      .then(() => {
        res.send({ message: 'Trade rejected' });
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }

  static remove(req, res) {
    const { id } = req.body;
    models.trade.remove({ id })
      .then(() => {
        res.send({ message: 'Trade removed' });
      })
      .catch((e) => {
        res.status(500).send({ error: e });
      });
  }
}

module.exports = Trade;
