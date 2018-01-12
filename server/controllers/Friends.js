class Friend {
  static getAll(req, res) {
    res.end('got all my friends');
  }

  static getById(req, res) {
    res.end('got one friend');
  }

  static post(req, res) {
    res.end('posted a new friendship');
  }
}

module.exports = Friend;
