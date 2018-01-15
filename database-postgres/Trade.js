const db = require('./config');

class Trade {
  static getAllTradeByUserId({ userId }) {
    const queryString = 'SELECT * FROM trade WHERE user_id1 = $1 OR user_id2 = $1';
    return db.any(queryString, [userId]);
  }

  static getAllTradesByUsername({ username }) {
    const queryString = 'SELECT * FROM trade WHERE user_id1 = (SELECT id FROM users WHERE username = $1)';
    return db.any(queryString, [username]);
  }

  static findById({userId1, userId2 }) {
    const queryString = 'SELECT * from trade WHERE user_id1 = $1 AND user_id2 = $2';
    return db.any(queryString, [userId1, userId2]);
  }

  static getRequestsPending({ userId }) {
    const queryString = 'SELECT * FROM trade WHERE user_id2 = $1 AND status IS NULL';
    return db.any(queryString, [userId]);
  }

  static initiate({ userId1, foodId1, userId2, foodId2 }) {
    const queryString = 'INSERT INTO trade (user_id1, food_id1, user_id2, food_id2) VALUES ($1, $2, $3, $4)';
    return db.any(queryString, [userId1, foodId1, userId2, foodId2]);
  }

  static accept({ id }) {
    const queryString = 'UPDATE trade SET status = TRUE WHERE id = $1';
    return db.any(queryString, [id]);
  }

  static reject({ id }) {
    const queryString = 'UDATE trade SET status = FALSE WHERE id = $1';
    return db.any(queryString, [id]);
  }

  static getAllSuccessfulTradeBetween({ username1, username2 }) {
    const queryString = 'SELECT * FROM trade INNER JOIN users on trade.user_id1 ';
    return db.any(queryString, [username1, username2]);
  }
}

module.exports = Trade;
