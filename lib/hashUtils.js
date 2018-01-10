const crypto = require('crypto');

exports.createHash = function(data, salt = '') {
  let shasum = crypto.createHash('sha256');
  shasum.update(data + salt);
  return shasum.digest('hex');
};

exports.compareHash = function(attempted, stored, salt) {
  return stored === this.createHash(attempted, salt);
};

exports.createRandom32String = function() {
  return crypto.randomBytes(32).toString('hex');
};


