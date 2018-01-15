const models = require('../models');

class Trade {
  static getById(req, res) {
    const { userId1, userId2 } = req.params;
    models.trade.findById({ userId1, userId2 })
      .then((trades) => {
        res.json(trades);
      })
      .catch((e) => {
        res.status(404).send({ error: e });
      });
  }

  static getAllTradeByUserId(req, res) {
    const { userId } = req.params;
    models.trade.getAllTradeByUserId({ userId })
      .then((trades) => {
        res.json(trades);
      })
      .catch((e) => {
        res.status(404).send({ error: e });
      });
  }

  static getRequestsPending(req, res) {
    const { userId } = req.params;
    models.trade.getRequestsPending({ userId })
      .then((requests) => {
        res.json(requests);
      })
      .catch((e) => {
        res.status(404).send({ error: e });
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

  static getTradesForProfilePage(req, res) {
    const { username1, username2 } = req.params;

    models.trade.getTradesForProfilePage({ username1, username2 })
      .then((trades) => {
        res.json(trades);
      })
      .catch((e) => {
        res.status(404).send({ error: e });
      });
  }
}

module.exports = Trade;
