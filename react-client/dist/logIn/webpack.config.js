const path = require('path');

const SRC_DIR = path.join(__dirname, '../../src/log-in-page');
const DIST_DIR = path.join(__dirname);

module.exports = {
  entry: `${SRC_DIR}/logIn.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx||.*?/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
};
