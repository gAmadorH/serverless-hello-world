module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:yml/standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
  },
};
