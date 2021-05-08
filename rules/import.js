module.exports = {
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.mjs',
          '.js',
          '.json',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
      alias: {
        map: [
          ['@', './src'],
          ['@@', './src/.umi'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
    'import/extensions': [
      '.mjs',
      '.js',
      '.json',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    /**
     * 【警告】禁止引入不存在的内容
     * 可能存在配置错误，导致import出错，所以这里只作警告处理
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': ['warn', { commonjs: true, amd: true }],

    /**
     * 【严重】验证导入的内容是否都是已声明导出的内容
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
     */
    'import/named': ['error'],

    /**
     * 【严重】验证默认导出是否已声明默认导出
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
     */
    'import/default': ['off'],

    /**
     * 【严重】验证通过完整namespace导入时（* as xxx），使用的内容是否已导出
     */
    'import/namespace': ['error'],

    /**
     * 【严重】禁止冗余的引用路径
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
     */
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],

    /**
     * 【严重】禁止循环引用
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
     */
    'import/no-cycle': ['error', { ignoreExternal: true }],

    /**
     * 【严重】禁止引用自己
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
     */
    'import/no-self-import': ['error'],

    /**
     * 【严重】检查导出变量重名等不正确的情况
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
     */
    'import/export': ['error'],

    /**
     * 【严重】进制导出可变内容
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
     */
    'import/no-mutable-exports': 'error',

    /**
     * 【严重】import必须写在顶部
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
     */
    'import/first': 'error',

    /**
     * 【严重】进制重复的引用
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     */
    'import/no-duplicates': 'error',

    /**
     * 【严重】隐藏文件后缀
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
     */
    'import/extensions': [
      'error', 'ignorePackages', {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    /**
     * 【严重】import顺序
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     */
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

    /**
     * 【严重】import之后必须追加空行
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': 'error',

    /**
     * 【严重】进制绝对路径引入
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
     */
    'import/no-absolute-path': 'error',

    /**
     * 【警告】进制动态require
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     */
    'import/no-dynamic-require': 'warn',

    /**
     * 【严重】进制使用webpack-loader的方式直接引入
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
     */
    'import/no-webpack-loader-syntax': 'error',


  },
};
