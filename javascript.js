module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    require.resolve('./rules/eslint-recommend.js'),
    require.resolve('./rules/react-recommend.js'),
    require.resolve('./rules/hooks-recommend.js'),
    require.resolve('./rules/import.js'),
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    document: true,
    navigator: true,
    fetch: true,
    FormData: true,
    sessionStorage: true,
    localStorage: true,
  },
};
