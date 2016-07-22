module.exports = {
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "env": {
      "browser": true,
      "amd": true,
      "es6": true,
      "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "no-unused-vars": "off",
        "no-undef": "warn",
        "no-console": "warn",
        "quotes": [ "error", "single", {"avoidEscape": true, "allowTemplateLiterals": true} ],
        "eqeqeq": "error",
        "curly": "error",
        "no-multi-spaces": "error",
        "block-scoped-var": "error",
        "dot-notation": "warn",
        "guard-for-in": "warn",
        "no-alert": "warn"
    }
};
