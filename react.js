module.exports = {
  "extends": ["standard-react"],

  "rules": {
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "selfClosing": "after-props",
        "nonEmpty": "after-props"
      }
    ],
    "react/jsx-space-before-closing": [
      "error",
      "always"
    ]
  }
}
