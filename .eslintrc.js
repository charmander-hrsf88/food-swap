/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  // extends: './node_modules/eslint-config-hackreactor/index.js',
  extends: 'airbnb',
  "globals": {
    "document": true,
    "console" : true,
    // "foo": true,
    // "window": true,
    "required": {
      "some": [ "nesting", "id" ]
  }
  },
  
};
