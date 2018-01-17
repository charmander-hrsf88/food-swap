const db = require('../../database-postgres');

class Trade {
  static getAllTradeByUserId({ userId }) {
    return db.trade.getAllTradeByUserId({ userId });
  }

  static getAllTradesByUsername({ username }) {
    return db.trade.getAllTradesByUsername({ username });
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

  static getTradesForProfilePage({ username1, username2 }) {
    if (username1 === username2) {
      const username = username1;
      // USER is getting data from his/her own profile page
      // RETURN ALL THE TRADE SORTED:
      // 1. trades offerred to the user that they have not responded to
      // 2. trades the user offered to others are second
      // 3. the successful trades
      // 4. failed trade
      // return db.trade.getAllTradesByUsername({ username })
      //   .then((trades) => {
      //     if ()
      //   });
    }

    return db.trades.getAllSuccessfulTradeBetween({ username1, username2 });
  }
}

module.exports = Trade;
