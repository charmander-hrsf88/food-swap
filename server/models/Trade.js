const db = require('../../database-postgres');

class Trade {
  static getAllTradeByUserId({ userId }) {
    return db.trade.getAllTradeByUserId({ userId });
  }
  static findById({ userId1, userId2 }) {
    return db.trade.findById({ userId1, userId2 });
  }

  static getRequestsPending({ userId }) {
    return db.trade.getRequestsPending({ userId });
  }
  
  static initiate({ userId1, foodId1, userId2, foodId2 }) {
    return db.trade.initiate({ userId1, foodId1, userId2, foodId2 });
  }

  static accept({ id }) {
    return db.trade.accept({ id });
  }

  static reject({ id }) {
    return db.trade.reject({ id });
  }
}

module.exports = Trade;
