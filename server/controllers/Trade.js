class Trade {
  static getAll(req, res) {
    res.end('got all the trades');
  }

  static getById(req, res) {
    res.end('got a trade with id');
  }

  static post(req, res) {
    res.end('posted a new trade');
  }
}

module.exports = Trade;
