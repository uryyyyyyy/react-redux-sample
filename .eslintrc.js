module.exports = {
    "extends": [
        "plugin:prettier/recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "@typescript-eslint",
        "prettier",
        "react"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
