module.exports = {
  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaVersion": 2017
  },

  "env": {
    "es6": true,
    "node": true
  },

  "extends": ["eslint-config-democracyos", "plugin:node/recommended"],

  "plugins": ["node"],

  "rules": {
    "node/exports-style": 0
  }
}
