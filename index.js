module.exports = {
  "parser": "babel-eslint",

  "extends": ["standard"],

  "plugins": ["import", "promise", "babel"],

  "rules": {
    "arrow-parens": [
      "error",
      "always"
    ],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ],
    "curly": [
      "error",
      "multi-line",
      "consistent"
    ],
    "import/no-extraneous-dependencies": 0,
    "import/no-unassigned-import": 0,
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "promise/catch-or-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn"
  }
}
