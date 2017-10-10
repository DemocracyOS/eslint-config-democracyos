module.exports = {
  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaVersion": 2017
  },

  "env": {
    "node": true
  },

  "extends": ["plugin:node/recommended"],

  "plugins": ["node"],

  "rules": {
    "node/exports-style": 0
  }
}
