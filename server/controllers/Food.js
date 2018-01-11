class Food {
  static getAll(req, res) {
    res.end('got all foods');
  }

  static getById(req, res) {
    res.end('got a food with an id');
  }

  static post(req, res) {
    res.end('posted');
  }
}

module.exports = Food;
