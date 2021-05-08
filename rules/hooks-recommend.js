module.exports = {
  extends: [
    'plugin:react-hooks/recommended',
  ],
  // 以下内容是在recommended的基础上，再做出的一些调整
  rules: {
    /**
     * 【严重】检查Hooks的规则
     *  不在循环，条件或嵌套函数中调用hooks
     */
    'react-hooks/rules-of-hooks': 'error',


    /**
     * 【警告】检查effect的依赖
     */
    'react-hooks/exhaustive-deps': 'warn',
  },
};
