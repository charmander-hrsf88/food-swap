const db = require('../../database-postgres');

class Trade {
  static getTradesById({ id }) {
    return db.trade.getTradesById({ id });
  }

  static getTradesByUsername({ username }) {
    return db.trade.getTradesByUsername({ username });
  }
  
  static getTradesByUserId({ userId }) {
    return db.trade.getTradesByUserId({ userId });
  }

  static getTradesByTwoUsernames({ username1, username2 }) {
    return db.trade.getTradesByTwoUsernames({ username1, username2 });
  }

  static getTradesByTwoUserIds({ userId1, userId2 }) {
    return db.trade.getTradesByTwoUserIds({ userId1, userId2 });
  }
  
  static initiate({ userId1, foodId1, userId2, foodId2 }) {
    console.log('TRADE: user1:', userId1, '. food1:', foodId1, '. user2:', userId2, '. food2:', foodId2)
    return db.trade.initiate({ userId1, foodId1, userId2, foodId2 });
  }

  static update({ id, userId2, foodId2 }) {
    return db.trade.update({ id, userId2, foodId2 });
  }
  static accept({ id }) {
    return db.trade.accept({ id });
  }

  static reject({ id }) {
    return db.trade.reject({ id });
  }

  static remove({ id }) {
    return db.trade.remove({ id });
  }

  static getPossibleTradeByUserId({ userId2 }) {
    return db.trade.getPossibleTradeByUserId({ userId2 });
  }

  static getPossibleTradeExceptUser({ userId }) {
    return db.trade.getPossibleTradeExceptUser({ userId });
  }
}

module.exports = Trade;
