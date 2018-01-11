const db = require('./config');

class Trade {
  static initiate({ userId1, foodId1, userId2, foodId2 }) {
    const queryString = 'INSERT INTO trade (user_id1, food_id1, user_id2, food_id2) VALUES ($1, $2, $3, $4)';
    return db.any(queryString, [userId1, foodId1, userId2, foodId2]);
  }

  static success({ id }) {
    const querySting = 'UPDATE trade SET status = TRUE WHERE id = $1';
    return db.any(queryString, [id]);
  }

  static failure({ id }) {
    const queryString = 'UDATE trade SET status = FALSE WHERE id = $1';
    return db.any(queryString, [id]);
  }
}

module.exports = Trade;
