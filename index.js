module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
  },
  extends: [
    require.resolve('./rules/eslint-recommend.js'),
    require.resolve('./rules/react-recommend.js'),
    require.resolve('./rules/hooks-recommend.js'),
    require.resolve('./rules/import.js'),
    require.resolve('./rules/typescript.js'),
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
