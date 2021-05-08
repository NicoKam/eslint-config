const { resolve } = require('path');

module.exports = {
  extends: [require.resolve('./index')],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: resolve(__dirname, './tsconfig.json'),
  },
};
