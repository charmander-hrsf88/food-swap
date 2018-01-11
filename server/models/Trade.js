const db = require('../../database-postgres');

class Trade {
  static initiate({ userId1, foodId1, userId2, foodId2 }) {
    return db.trade.initiate({ userId1, foodId1, userId2, foodId2 });
  }

  static success({ id }) {
    return db.trade.success({ id });
  }

  static failure({ id }) {
    return db.trade.failure({ id });
  }
}

module.exports = Trade;
