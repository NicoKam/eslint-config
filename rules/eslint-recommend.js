/**
 * eslint:recommended
 * https://eslint.org/docs/rules/
 * recommended为规则页面中打勾的内容，下面是recommended的规则的简短翻译
 *
 *
 * > for-direction
 * https://eslint.org/docs/rules/for-direction
 * 强制 "for" 循环中下标的变化是正确的（防止下标递增/递减写反了，出现死循环）
 *
 * > getter-return
 * https://eslint.org/docs/rules/getter-return
 * 强制在 getters 函数中使用 `return` 表达式
 *
 * > no-async-promise-executor
 * https://eslint.org/docs/rules/no-async-promise-executor
 * 禁止 using an async function as a Promise executor
 *
 * > no-compare-neg-zero
 * https://eslint.org/docs/rules/no-compare-neg-zero
 * 禁止与 -0 做比较
 *
 * > no-cond-assign
 * https://eslint.org/docs/rules/no-cond-assign
 * 禁止在条件表达式中赋值
 *
 * > no-constant-condition
 * https://eslint.org/docs/rules/no-constant-condition
 * 禁止在条件语句中使用 `常量` 作为表达式
 *
 * > no-control-regex
 * https://eslint.org/docs/rules/no-control-regex
 * 禁止在正则表达式中使用控制字符（0~31）
 *
 * > no-debugger
 * https://eslint.org/docs/rules/no-debugger
 * 禁止使用 `debugger`
 *
 * > no-dupe-args
 * https://eslint.org/docs/rules/no-dupe-args
 * 禁止在函数中定义重复的形参
 *
 * > no-dupe-else-if
 * https://eslint.org/docs/rules/no-dupe-else-if
 * 禁止在 if-else-if 表达式中定义重复的条件表达式
 *
 * > no-dupe-keys
 * https://eslint.org/docs/rules/no-dupe-keys
 * 禁止在对象中定义重复的key
 *
 * > no-duplicate-case
 * https://eslint.org/docs/rules/no-duplicate-case
 * 禁止重复的 case labels
 *
 * > no-empty
 * https://eslint.org/docs/rules/no-empty
 * 禁止空的块
 *
 * > no-empty-character-class
 * https://eslint.org/docs/rules/no-empty-character-class
 * 禁止在正则表达式中使用空的字符组（[]）
 *
 * > no-ex-assign
 * https://eslint.org/docs/rules/no-ex-assign
 * 禁止在 `catch` 中修改异常变量
 *
 * > no-extra-boolean-cast
 * https://eslint.org/docs/rules/no-extra-boolean-cast
 * 禁止不必要的布尔值转换
 *
 * > no-extra-semi
 * https://eslint.org/docs/rules/no-extra-semi
 * 禁止不必要的分号;
 *
 * > no-func-assign
 * https://eslint.org/docs/rules/no-func-assign
 * 禁止修改 `function` 函数声明
 *
 * > no-import-assign
 * https://eslint.org/docs/rules/no-import-assign
 * 禁止修改 import 引入的常量
 *
 * > no-inner-declarations
 * https://eslint.org/docs/rules/no-inner-declarations
 * 禁止在块级作用域中使用 var 声明变量 或使用 function 定义函数（导致变量或函数的作用域大于块级作用域）
 *
 * > no-invalid-regexp
 * https://eslint.org/docs/rules/no-invalid-regexp
 * 禁止使用 `RegExp` 构造函数时传入非法正则表达式
 *
 * > no-irregular-whitespace
 * https://eslint.org/docs/rules/no-irregular-whitespace
 * 禁止非常规的字符代替空格
 *
 * > no-misleading-character-class
 * https://eslint.org/docs/rules/no-misleading-character-class
 * 禁止在代码中使用不同编码的字符（比如emoji）容易导致字符串匹配失败
 *
 * > no-obj-calls
 * https://eslint.org/docs/rules/no-obj-calls
 * 禁止将一些全局对象作为函数调用（如Math,JSON,Reflect）等
 *
 * > no-prototype-builtins
 * https://eslint.org/docs/rules/no-prototype-builtins
 * 禁止直接调用对象 `prototype` 中的方法
 *
 * > no-regex-spaces
 * https://eslint.org/docs/rules/no-regex-spaces
 * 禁止在正则表达式中使用多个空格
 *
 * > no-setter-return
 * https://eslint.org/docs/rules/no-setter-return
 * 禁止在 setters 中返回值
 *
 * > no-sparse-arrays
 * https://eslint.org/docs/rules/no-sparse-arrays
 * 禁止定义数组时使用空内容
 *
 * > no-unexpected-multiline
 * https://eslint.org/docs/rules/no-unexpected-multiline
 * 禁止容易混淆的换行
 *
 * > no-unreachable
 * https://eslint.org/docs/rules/no-unreachable
 * 禁止在 `return`, `throw`, `continue`, and `break` 表达式 之后 编写无法执行的代码
 *
 * > no-unsafe-finally
 * https://eslint.org/docs/rules/no-unsafe-finally
 * 禁止在 `finally` 块中使用流程控制语句（finally是一定会被执行的，不应该有流程控制）
 *
 * > no-unsafe-negation
 * https://eslint.org/docs/rules/no-unsafe-negation
 * 禁止容易混淆的取反（比如用在 in / instanceof 表达式前）
 *
 * > use-isnan
 * https://eslint.org/docs/rules/use-isnan
 * 要求使用 `isNaN()` 代替 === NaN 判断
 *
 * > valid-typeof
 * https://eslint.org/docs/rules/valid-typeof
 * 强制校验 `typeof` 表达式后必须使用合法字符串
 *
 * > no-case-declarations
 * https://eslint.org/docs/rules/no-case-declarations
 * 禁止在case语句中定义变量，会使其作用域与case不符
 *
 * > no-empty-pattern
 * https://eslint.org/docs/rules/no-empty-pattern
 * 禁止空的解构语法
 *
 * > no-fallthrough
 * https://eslint.org/docs/rules/no-fallthrough
 * 禁止在case语句中直接跳到下一个case，防止漏写break
 *
 * > no-global-assign
 * https://eslint.org/docs/rules/no-global-assign
 * 禁止对全局的只读对象进行重新赋值
 *
 * > no-octal
 * https://eslint.org/docs/rules/no-octal
 * 禁止使用八进制定义（容易与十进制混淆）
 *
 * > no-redeclare
 * https://eslint.org/docs/rules/no-redeclare
 * 禁止变量的重复声明
 *
 * > no-self-assign
 * https://eslint.org/docs/rules/no-self-assign
 * 禁止将自己赋值给自己
 *
 * > no-unused-labels
 * https://eslint.org/docs/rules/no-unused-labels
 * 禁止无意义的 labels
 *
 * > no-useless-catch
 * https://eslint.org/docs/rules/no-useless-catch
 * 禁止无意义的 `catch` 语句
 *
 * > no-useless-escape
 * https://eslint.org/docs/rules/no-useless-escape
 * 禁止没有必要的转义字符
 *
 * > no-with
 * https://eslint.org/docs/rules/no-with
 * 禁止使用 `with` 语句
 *
 * > no-delete-var
 * https://eslint.org/docs/rules/no-delete-var
 * 禁止删除变量
 *
 * > no-shadow-restricted-names
 * https://eslint.org/docs/rules/no-shadow-restricted-names
 * 禁止使用一些全局的对象名称作为命名
 *
 * > no-undef
 * https://eslint.org/docs/rules/no-undef
 * 禁止直接使用某些全局变量（被视为未定义）
 *
 * > no-unused-vars
 * https://eslint.org/docs/rules/no-unused-vars
 * 禁止定义未被使用的变量
 *
 * > no-mixed-spaces-and-tabs
 * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
 * 禁止缩进时混用Tab和空格
 *
 * > constructor-super
 * https://eslint.org/docs/rules/constructor-super
 * 要求在构造函数中调用 `super()` 函数
 *
 * > no-class-assign
 * https://eslint.org/docs/rules/no-class-assign
 * 禁止修改类成员
 *
 * > no-const-assign
 * https://eslint.org/docs/rules/no-const-assign
 * 禁止修改 `const` 变量
 *
 * > no-dupe-class-members
 * https://eslint.org/docs/rules/no-dupe-class-members
 * 禁止重复的class成员
 *
 * > no-new-symbol
 * https://eslint.org/docs/rules/no-new-symbol
 * 禁止使用 `new Symbol()`
 *
 * > no-this-before-super
 * https://eslint.org/docs/rules/no-this-before-super
 * 禁止在构造函数中调用之 `super()` 前使用 `this`/`super`
 *
 * > require-yield
 * https://eslint.org/docs/rules/require-yield
 * 要求生成器函数必须包含关键字 `yield`
 *
 */

module.exports = {
  extends: 'eslint:recommended',
  // 以下内容是在recommended的基础上，再做出的一些调整
  rules: {
    // Possible Errors

    /**
     * 【关闭】禁止在循环中使用await
     * https://eslint.org/docs/rules/no-await-in-loop
     */
    'no-await-in-loop': 'off',

    /**
     * 【严重】禁止使用console，console.error除外
     * https://eslint.org/docs/rules/no-console
     */
    'no-console': ['error', { allow: ['error', 'warn'] }],

    /**
     * 【严重】禁止空块 error除外
     * https://eslint.org/docs/rules/no-empty
     */
    'no-empty': ['error', { allowEmptyCatch: true }],

    /**
     * 【严重】禁止使用书写会造成精度丢失的数字
     * https://eslint.org/docs/rules/no-loss-of-precision
     */
    'no-loss-of-precision': ['error'],

    /**
     * 【严重】禁止Promise executor中返回值
     * https://eslint.org/docs/rules/no-promise-executor-return
     */
    'no-promise-executor-return': ['error'],

    /**
     * 【严重】禁止在字符串中书写模板字符串（防止误写）
     * https://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': ['error'],

    /**
     * 【严重】禁止无法抵达的循环体
     * https://eslint.org/docs/rules/no-unreachable-loop
     */
    'no-unreachable-loop': ['error'],

    // Best Practices

    /**
     * 【严重】检查数组的操作方法中是否都存在返回值
     * https://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': [
      'error', {
        // forEach方法中不允许返回值
        checkForEach: true,
      },
    ],

    /**
     * 【警告】在class的成员方法中必须使用this，否则它不需要作为成员方法
     * 此处没有设置为error级别是因为可能很多代码都违反了该规则，且无法autofix
     * https://eslint.org/docs/rules/class-methods-use-this
     */
    'class-methods-use-this': ['warn'],

    /**
     * 【严重】要求有返回值的方法的所有分支必须都有返回值
     * https://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': ['error'],

    /**
     * 【严重】条件表达式之后的语句块，是否需要使用大括号
     * https://eslint.org/docs/rules/curly
     */
    curly: [
      'error',
      // 如果是多行，则需要大括号
      'multi-line',
      // 如果配对的语句中（如else语句匹配的if语句）存在大括号，则必须都要大括号
      'consistent',
    ],

    /**
     * 【警告】要求switch语句必须有default选项
     * https://eslint.org/docs/rules/default-case
     */
    'default-case': 'warn',

    /**
     * 【严重】要求switch中的default语句必须放在最后
     * https://eslint.org/docs/rules/default-case-last
     */
    'default-case-last': 'error',

    /**
     * 【警告】带有默认值的形参必须放在后面
     * 个人感觉这个可以不作为强制约束，但推荐使用，所以没有开启error
     * https://eslint.org/docs/rules/default-param-last
     */
    'default-param-last': 'warn',

    /**
     * 【严重】引用对象的属性时，点必须要跟随属性
     * https://eslint.org/docs/rules/dot-location
     */
    'dot-location': ['error', 'property'],

    /**
     * 【严重】强制使用等于 null除外
     * https://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    /**
     * 【严重】禁止使用alert,confirm,prompt
     * https://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'error',

    /**
     * 【严重】禁止使用arguments.caller arguments.callee
     * https://eslint.org/docs/rules/no-caller
     */
    'no-caller': 'error',

    /**
     * 【严重】禁止在构造函数中返回内容
     * https://eslint.org/docs/rules/no-constructor-return
     */
    'no-constructor-return': 'error',

    /**
     * 【严重】禁止在else中编写return语句
     * https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'error',

    /**
     * 【严重】禁止使用eval，防止可能的xss攻击
     * https://eslint.org/docs/rules/no-eval
     */
    'no-eval': ['error', { allowIndirect: true }],

    /**
     * 【严重】禁止无意义的bind语句
     * https://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': ['error'],

    /**
     * 【严重】禁止无意义的label
     * https://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': ['error'],

    /**
     * 【严重】浮点数必须写完整
     * https://eslint.org/docs/rules/no-floating-decimal
     */
    'no-floating-decimal': 'error',

    /**
     * 【严重】禁止在setTimeout(), setInterval() or execScript()中直接执行字符串语句
     * https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'error',

    /**
     * 【严重】禁止无意义的labels
     * https://eslint.org/docs/rules/no-labels
     */
    'no-labels': [
      'error',
      {
        // 允许在循环上使用
        allowLoop: true,
        // 允许在switch上使用
        allowSwitch: true,
      },
    ],

    /**
     * 【严重】禁止多余的空格
     * https://eslint.org/docs/rules/no-multi-spaces
     */
    'no-multi-spaces': 'error',

    /**
     * 【严重】禁止使用\编写多行文本
     * https://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': 'error',

    /**
     * 【严重】禁止使用基础类型对应的引用类型作为构造函数创建对象
     * https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'error',

    /**
     * 【严重】禁止无意义的8进制转义
     * https://eslint.org/docs/rules/no-nonoctal-decimal-escape
     */
    'no-nonoctal-decimal-escape': 'error',

    /**
     * 【严重】禁止对函数的形参作修改
     * https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': [
      'error',
      {
        // 禁止对形参的属性作修改
        props: true,
        ignorePropertyModificationsFor: [
          // 允许修改的形参
          // canvas中的context
          'ctx', 'context',
        ],
      },
    ],

    /**
     * 【严重】禁止直接使用__proto__
     * https://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'error',

    /**
     * 【警告】禁止将赋值语句作为返回值
     * 这条规则应该是error的，但容易造许多的箭头函数异常难以修复
     * https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': 'warn',

    /**
     * 【严重】禁止无意义的return await
     * https://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'error',

    /**
     * 【严重】禁止自身比较
     * https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'error',

    /**
     * 【严重】禁止逗号操作符
     * https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'error',

    /**
     * 【严重】禁止随便throw，需要 throw new Error('');
     * https://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': 'error',

    /**
     * 【严重】禁止循环中不修改判断因子（可能造成死循环）
     * https://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': 'error',

    /**
     * 【严重】禁止无用的语句
     * https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': [
      'error',
      {
        // 允许短语判断：a && a()
        allowShortCircuit: true,
        // 允许三元表达式
        allowTernary: true,
      },
    ],

    /**
     * 【严重】禁止无意义的call/apply
     * https://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': ['error'],

    /**
     * 【严重】禁止无意义的return语句
     * https://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': 'error',

    /**
     * 【严重】调用 Promise reject 时请传入 Error
     * https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': 'error',

    /**
     * 【严重】使用parseInt时，需要指定转换的进制
     * 可能会因为字符串的格式，自动识别为其他进制，使用 Math.trunc 可以避开进制以及ts下必须传入string的问题
     * https://eslint.org/docs/rules/radix
     */
    radix: 'error',

    /**
     * 【严重】iife结构需要用括号包起来
     * https://eslint.org/docs/rules/wrap-iife
     */
    'wrap-iife': 'error',

    /**
     * 【严重】条件语句的常量写在哪边？
     * never：写在右边
     * 这个需要讨论一下
     * https://eslint.org/docs/rules/yoda
     */
    yoda: ['error', 'never', { exceptRange: true }],

    // Variables

    /**
     * 【严重】禁止使用变量作为label
     * https://eslint.org/docs/rules/no-label-var
     */
    'no-label-var': ['error'],

    /**
     * 【警告】禁止在闭包内声明相同名称的变量
     * 关于这条规则，之前我们一直是设置为error的，never的值为'all'，但实际体验下来
     * 该条规则对我们开发影响较大。在React中，经常通过子函数对某个状态进行赋值，而该
     * 状态的名称与外层的状态名称冲突。我们需要花费额外精力去修改变量名称。
     *
     * 总的来说这条规则对我们带来的帮助小于弊端，因此我将hoist选项设为了'never'
     * https://eslint.org/docs/rules/no-shadow
     */
    'no-shadow': [
      'warn', {
        builtinGlobals: false,
        hoist: 'never',
      },
    ],

    /**
     * 【严重】禁止声明未被使用的变量
     * https://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': [
      'error',
      {
        // 作为函数参数时忽略，原因：函数参数可能包含了部分API的描述信息，便于后期维护
        args: 'none',
        // 作为结构的变量时，存在siblings时忽略：原因：常见的结构用法，比如剔除对象中的某个变量
        ignoreRestSiblings: true,
      },
    ],

    /**
     * 【严重】禁止在声明前使用
     * https://eslint.org/docs/rules/no-use-before-define
     */
    'no-use-before-define': 'error',

    // Stylistic Issues

    /**
     * 【关闭】要求数组换行
     * 首尾保持一致
     * https://eslint.org/docs/rules/array-bracket-newline
     */
    'array-bracket-newline': ['error'],

    /**
     * 【严重】数组两端需要空格
     * 不需要添加空格
     * https://eslint.org/docs/rules/array-bracket-spacing
     */
    'array-bracket-spacing': ['error', 'never'],

    /**
     * 【严重】数组内容换行
     * https://eslint.org/docs/rules/array-element-newline
     */
    'array-element-newline': ['error', 'consistent', { multiline: true }],

    /**
     * 【严重】块之间需要空格
     * https://eslint.org/docs/rules/block-spacing
     */
    'block-spacing': ['error'],

    /**
     * 【严重】大括号的换行样式，详见文档
     * https://eslint.org/docs/rules/brace-style
     */
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    /**
     * 【严重】使用驼峰命名的规则
     * https://eslint.org/docs/rules/camelcase
     */
    camelcase: ['error'],

    /**
     * 【严重】添加逗号的规则
     * 存在多行时需要行末逗号
     * https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': ['error', 'always-multiline'],

    /**
     * 【严重】逗号前后的空格
     * 前不加空格，后加空格
     * https://eslint.org/docs/rules/comma-spacing
     */
    'comma-spacing': [
      'error', {
        before: false,
        after: true,
      },
    ],

    /**
     * 【严重】逗号在一行中的位置
     * 默认在行末
     * https://eslint.org/docs/rules/comma-style
     */
    'comma-style': ['error'],

    /**
     * 【严重】变量属性中括号中间的空格
     * 默认不需要空格
     * https://eslint.org/docs/rules/computed-property-spacing
     */
    'computed-property-spacing': ['error'],

    /**
     * 【严重】换行符
     * 默认是LF
     * https://eslint.org/docs/rules/eol-last
     */
    'eol-last': ['error'],

    /**
     * 【严重】调用函数时，函数名后的空格
     * 默认不需要空格
     * https://eslint.org/docs/rules/func-call-spacing
     */
    'func-call-spacing': ['error'],

    /**
     * 【严重】调用函数时，参数的换行情况
     * 保持一致
     * https://eslint.org/docs/rules/function-call-argument-newline
     */
    'function-call-argument-newline': ['error', 'consistent'],


    /**
     * 【关闭】函数形参的换行
     * 默认：存在多行形参时，必须换行
     * 该条规则会与 max-len 冲突，所以关闭
     * https://eslint.org/docs/rules/function-paren-newline
     */
    'function-paren-newline': ['off'],

    /**
     * 【关闭】约束箭头函数body的换行习惯
     * 默认：不换行
     * 该规则有可能导致箭头函数合并单行，内容过长，所以关闭
     * https://eslint.org/docs/rules/implicit-arrow-linebreak
     */
    'implicit-arrow-linebreak': ['off'],

    /**
     * 【严重】缩进
     * https://eslint.org/docs/rules/indent
     */
    indent: [
      'error', 2, {
        SwitchCase: 1,
      },
    ],

    /**
     * 【严重】jsx中引号的形式
     * 默认：双引号
     * https://eslint.org/docs/rules/jsx-quotes
     */
    'jsx-quotes': ['error'],

    /**
     * 【严重】key之后的空格规则
     * https://eslint.org/docs/rules/key-spacing
     */
    'key-spacing': [
      'error', {
        // 冒号前：禁止
        beforeColon: false,
        // 冒号后：必须
        afterColon: true,
        // 严格跟随key
        mode: 'strict',
        // 剩下几个选项，风格比较特别，暂时不定义
      },
    ],

    /**
     * 【严重】关键字前后的空格规则
     * 前后都开启空格
     * https://eslint.org/docs/rules/keyword-spacing
     */
    'keyword-spacing': [
      'error', {
        before: true,
        after: true,
        // if/for/while关键字之后无需空格
        // overrides: {
        //   for: { after: false },
        //   while: { after: false },
        // },
      },
    ],

    /**
     * 【严重】换行格式(\n)
     * https://eslint.org/docs/rules/linebreak-style
     */
    'linebreak-style': ['error', 'unix'],

    /**
     * 【严重】使用注释前后的空行配置
     * https://eslint.org/docs/rules/lines-around-comment
     */
    'lines-around-comment': [
      'error',
      {
        // 在块注释之前必须添加
        beforeBlockComment: true,
        // 允许省略块首个空行
        allowBlockStart: true,
        // 允许省略对象首个空行
        allowObjectStart: true,
        // 允许省略数组首个空行
        allowArrayStart: true,
        // 允许省略class首的空行
        allowClassStart: true,
      },
    ],

    /**
     * 【严重】class成员之间的空行配置（需要空行）
     * https://eslint.org/docs/rules/lines-between-class-members
     */
    'lines-between-class-members': [
      'error', 'always', {
        // 单行成员后无需空行
        exceptAfterSingleLine: true,
      },
    ],

    /**
     * 【严重】单行最大长度(120字符)
     * https://eslint.org/docs/rules/max-len
     */
    'max-len': [
      'error', 120, {
        // 注释长度
        comments: 200,
        // 忽略超长URL
        ignoreUrls: true,
        // 忽略超长模板字符串
        ignoreTemplateLiterals: true,
      },
    ],

    /**
     * 【警告】单个文件最大长度
     * 这个规则是有必要的，但比较难界定，且可能影响开发进度，暂时设置为warn
     * 可以忽略注释及空行
     * https://eslint.org/docs/rules/max-lines
     */
    'max-lines': [
      'warn', {
        max: 300,
        skipComments: true,
        skipBlankLines: true,
      },
    ],

    /**
     * 【关闭】多行注释格式（默认为块注释）
     * https://eslint.org/docs/rules/multiline-comment-style
     */
    'multiline-comment-style': ['off'],

    /**
     * 【严重】使用new创建新实例时，构造函数必须是大写字母开头
     * https://eslint.org/docs/rules/new-cap
     */
    'new-cap': [
      'error', {
        // 构造函数必须是大写字母
        newIsCap: true,
        // 大写字母开头的函数只能作为构造函数(可能有工厂方法)
        capIsNew: false,
        // 作为成员属性时也遵循上述规则
        properties: true,
      },
    ],

    /**
     * 【严重】链式调用时，每一个方法都需要单独一行
     * https://eslint.org/docs/rules/newline-per-chained-call
     */
    'newline-per-chained-call': [
      'error', {
        // 如果只有两条可以忽略
        ignoreChainWithDepth: 2,
      },
    ],

    /**
     * 【严重】无参构造函数的括号规则（不加括号）
     * https://eslint.org/docs/rules/new-parens
     */
    'new-parens': ['error', 'always'],

    /**
     * 【严重】禁止通过Array构造函数创包含内容的数组
     * 允许创建空数组：new Array(100)
     * https://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': ['error'],

    /**
     * 【警告】禁止在循环中使用continue
     * 写了continue确实容易影响循环的可读性，但影响有多少存在争议
     * https://eslint.org/docs/rules/no-continue
     */
    'no-continue': ['warn'],

    /**
     * 【严重】禁止使用单独的if嵌套，尽可能扁平化
     * https://eslint.org/docs/rules/no-lonely-if
     */
    'no-lonely-if': ['error'],

    /**
     * 【关闭】禁止混合的逻辑运算符
     * 混合使用逻辑运算符时，如果开发者对优先级的判断不是那么熟悉，很可能写出错误的逻辑表达式
     * 这条规则可能会导致我们运算符大量出现问题，暂时关闭
     * https://eslint.org/docs/rules/no-mixed-operators
     */
    'no-mixed-operators': ['off'],

    /**
     * 【严重】禁止连续赋值
     * https://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': ['error'],

    /**
     * 【严重】禁止连续空行（最多2行）
     * https://eslint.org/docs/rules/no-multiple-empty-lines
     */
    'no-multiple-empty-lines': [
      'error', {
        max: 2,
        maxEOF: 1,
      },
    ],

    /**
     * 【严重】禁止嵌套三元表达式，因为容易造成阅读困难
     * https://eslint.org/docs/rules/no-nested-ternary
     */
    'no-nested-ternary': ['error'],

    /**
     * 【严重】禁止使用 new Object() 应该使用字面量定义
     * https://eslint.org/docs/rules/no-new-object
     */
    'no-new-object': ['error'],

    /**
     * 【严重】禁止使用Tab字符，因为在不同环境下Tab的长度可能不同
     * https://eslint.org/docs/rules/no-tabs
     */
    'no-tabs': ['error'],

    /**
     * 【严重】禁止行末的空格
     * https://eslint.org/docs/rules/no-trailing-spaces
     */
    'no-trailing-spaces': ['error'],

    /**
     * 【严重】禁止不需要的三元表达式
     * https://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': ['error'],

    /**
     * 【严重】禁止属性前添加空格
     * https://eslint.org/docs/rules/no-whitespace-before-property
     */
    'no-whitespace-before-property': ['error'],

    /**
     * 【严重】没有被块包裹的条件/循环语句体的位置（默认：同一行）
     * https://eslint.org/docs/rules/nonblock-statement-body-position
     */
    'nonblock-statement-body-position': ['error'],

    /**
     * 【严重】Object换行规则
     * https://eslint.org/docs/rules/object-curly-newline
     */
    'object-curly-newline': [
      'error', {
        multiline: true,
        minProperties: 0,
        consistent: true,
      },
    ],

    /**
     * 【严重】对象的空格规则
     * https://eslint.org/docs/rules/object-curly-spacing
     */
    'object-curly-spacing': [
      'error', 'always', {
        arraysInObjects: true,
        // 对象中包含对象时不需要空格（因为总有一个对象是需要空格的）
        objectsInObjects: false,
      },
    ],

    /**
     * 【严重】对象属性的换行规则
     * https://eslint.org/docs/rules/object-property-newline
     */
    'object-property-newline': [
      'error', {
        // 允许所有属性都在一行定义
        allowAllPropertiesOnSameLine: true,
      },
    ],

    /**
     * 【严重】一次只能定义一个变量
     * https://eslint.org/docs/rules/one-var
     */
    'one-var': ['error', 'never'],

    /**
     * 【严重】运算符缩写
     * https://eslint.org/docs/rules/operator-assignment
     */
    'operator-assignment': ['error'],

    /**
     * 【严重】运算符换行的位置（after）
     * https://eslint.org/docs/rules/operator-linebreak
     */
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' }}],

    /**
     * 【严重】块前后的空行（不允许空行）
     * https://eslint.org/docs/rules/padded-blocks
     */
    'padded-blocks': ['error', 'never'],

    // padding-line-between-statements 这个参数比较多，可以后续再做调整

    /**
     * 【严重】建议使用指数运算符 针对 Math.pow
     * https://eslint.org/docs/rules/prefer-exponentiation-operator
     */
    'prefer-exponentiation-operator': ['error'],

    /**
     * 【严重】属性的引号配置
     * https://eslint.org/docs/rules/quote-props
     */
    'quote-props': [
      'error', 'as-needed', {
        // 数字类型的需要强制加引号（因为Object的key不存在number类型）
        numbers: true,
      },
    ],

    /**
     * 【严重】引号配置
     * https://eslint.org/docs/rules/quotes
     */
    quotes: ['error', 'single'],

    /**
     * 【严重】分号配置
     * https://eslint.org/docs/rules/semi
     */
    semi: ['error', 'always'],

    /**
     * 【严重】分号前后的空格配置
     * https://eslint.org/docs/rules/semi-spacing
     */
    'semi-spacing': [
      'error', {
        before: false,
        after: true,
      },
    ],

    /**
     * 【严重】分号的位置配置（默认在后面）
     * https://eslint.org/docs/rules/semi-style
     */
    'semi-style': ['error', 'last'],

    /**
     * 【严重】块前面的空格
     * https://eslint.org/docs/rules/space-before-blocks
     */
    'space-before-blocks': ['error', 'always'],

    /**
     * 【严重】函数参数前的空格
     * https://eslint.org/docs/rules/space-before-function-paren
     */
    'space-before-function-paren': [
      'error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    /**
     * 【严重】函数参数括号中的空格（默认不需要空格）
     * https://eslint.org/docs/rules/space-in-parens
     */
    'space-in-parens': ['error', 'never'],

    /**
     * 【严重】操作符之间的空格配置
     * https://eslint.org/docs/rules/space-infix-ops
     */
    'space-infix-ops': ['error'],

    /**
     * 【严重】元操作后的空格
     * https://eslint.org/docs/rules/space-unary-ops
     */
    'space-unary-ops': [
      'error', {
        words: true,
        nonwords: false,
      },
    ],

    /**
     * 【严重】注释后面跟随的空格
     * https://eslint.org/docs/rules/spaced-comment
     */
    'spaced-comment': ['error'],

    /**
     * 【严重】switch case语句中冒号前后的空格
     * https://eslint.org/docs/rules/switch-colon-spacing
     */
    'switch-colon-spacing': [
      'error', {
        after: true,
        before: false,
      },
    ],

    /**
     * 【严重】字符串模板函数
     * https://eslint.org/docs/rules/template-tag-spacing
     */
    'template-tag-spacing': ['error', 'never'],

    /**
     * 【严重】BOM头配置
     * https://eslint.org/docs/rules/unicode-bom
     */
    'unicode-bom': ['error', 'never'],

    // ES6

    /**
     * 【严重】箭头函数的body样式
     * 在不需要时隐藏大括号
     * https://eslint.org/docs/rules/arrow-body-style
     */
    'arrow-body-style': ['error', 'as-needed'],

    /**
     * 【严重】箭头函数的形参需要使用括号
     * https://eslint.org/docs/rules/arrow-parens
     */
    'arrow-parens': [
      'error',
      // 在必要时使用
      'as-needed',
      {
        // 在包含body块时必须使用括号
        requireForBlockBody: true,
      },
    ],

    /**
     * 【严重】箭头函数的箭头前后的空格
     * https://eslint.org/docs/rules/arrow-spacing
     */
    'arrow-spacing': [
      'error', {
        before: true,
        after: true,
      },
    ],

    /**
     * 【严重】生成器函数星号*前后的空格
     * 默认前面有空格，后面没有空格
     * https://eslint.org/docs/rules/generator-star-spacing
     */
    'generator-star-spacing': [
      'error', {
        before: true,
        after: false,
      },
    ],

    /**
     * 【严重】禁止重复的import模块
     * https://eslint.org/docs/rules/no-duplicate-imports
     */
    'no-duplicate-imports': ['error', { includeExports: false }],

    /**
     * 【严重】禁止无用的key变量（包括class成员）
     */
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],

    /**
     * 【严重】禁止无用的构造函数
     */
    'no-useless-constructor': ['error'],

    /**
     * 【严重】禁止无用的重命名
     */
    'no-useless-rename': ['error'],

    /**
     * 【严重】禁止使用var
     */
    'no-var': ['error'],

    /**
     * 【严重】对象简写
     */
    'object-shorthand': ['error'],

    /**
     * 【严重】对于未发生变化的变量，使用const定义
     */
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],

    /**
     * 【严重】在合适的情况下使用解构
     */
    'prefer-destructuring': ['error'],

    /**
     * 【严重】不使用arguments，使用解构获得剩余参数
     */
    'prefer-rest-params': ['error'],

    /**
     * 【严重】使用模板字符串代替字符串连接
     */
    'prefer-template': ['error'],

    /**
     * 【严重】展开操作符的空格（默认不加空格）
     */
    'rest-spread-spacing': ['error', 'never'],

    /**
     * 【严重】使用Symbol时必须填写描述
     */
    'symbol-description': ['error'],

    /**
     * 【严重】模板字符串变量前后的空格（默认不加空格）
     */
    'template-curly-spacing': ['error', 'never'],

    /**
     * 【严重】yield*的语法，空格加在*前面，与生成器函数风格保持一致
     */
    'yield-star-spacing': [
      'error', {
        before: true,
        after: false,
      },
    ],
  },
};
