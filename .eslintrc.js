module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-unused-expressions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-default': 0,
    'no-undef': 0,
  },
};
