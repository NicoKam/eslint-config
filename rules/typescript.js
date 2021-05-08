const eslintConfig = require('./eslint-recommend');

const { rules } = eslintConfig;

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true }},
  plugins: ['@typescript-eslint'],
  rules: {
    /**
     * 参考 no-use-before-define
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
     */
    '@typescript-eslint/no-use-before-define': rules['no-use-before-define'],
    'no-use-before-define': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {

        /**
         * 【严重】重载声明时，必须合并在一起声明，不得分开
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
         */
        '@typescript-eslint/adjacent-overload-signatures': 'error',

        /**
         * 【关闭】统一数组类型的声明方式（数组/泛型）
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
         */
        '@typescript-eslint/array-type': 'off',

        /**
         * 【关闭】检查 await 等待的类型是否为 Promise
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
         */
        '@typescript-eslint/await-thenable': 'off',

        /**
         * 【关闭】禁止ts注释（如：@ts-ignore）
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
         */
        '@typescript-eslint/ban-ts-comment': 'off',

        /**
         * 【严重】禁止tslint注释（我们不开启tslint，所以本条规则没有影响）
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
         */
        '@typescript-eslint/ban-tslint-comment': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
         */
        '@typescript-eslint/ban-types': 'error',

        /**
         * 【严重】大括号的换行样式
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
         */
        '@typescript-eslint/brace-style': rules['brace-style'],
        'brace-style': 'off',

        /**
         * 【严重】确保class成员(变量、方法)的名称是不可变的
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
         */
        '@typescript-eslint/class-literal-property-style': 'error',

        /**
         * 详见 comma-dangle
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
         */
        '@typescript-eslint/comma-dangle': rules['comma-dangle'],
        'comma-dangle': 'off',

        /**
         * 详见 comma-spacing
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
         */
        '@typescript-eslint/comma-spacing': rules['comma-spacing'],
        'comma-spacing': 'off',

        /**
         * 【严重】禁止在对象中，对key使用变量类型声明，应该使用 Record<keyType, valueType> 的方式
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
         */
        '@typescript-eslint/consistent-indexed-object-style': 'error',

        /**
         * 【关闭】强制类型不可变，禁止通过 as 的方式修改变量类型
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
         */
        '@typescript-eslint/consistent-type-assertions': 'off',

        /**
         * 【关闭】强制使用 type 或 interface 声明类型
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
         */
        '@typescript-eslint/consistent-type-definitions': 'off',

        /**
         * 【严重】强制在 import 时，显示地使用 import type 引入类型
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
         */
        '@typescript-eslint/consistent-type-imports': [
          'off',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
          },
        ],

        /**
         * 【警告】带默认值的参数，需要放在最后
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
         */
        '@typescript-eslint/default-param-last': rules['default-param-last'],
        'default-param-last': 'off',

        /**
         * 【关闭】`dot`的使用习惯
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
         */
        '@typescript-eslint/dot-notation': 'off',
        'dot-notation': 'off',

        /**
         * 【关闭】强制要求函数明确标记返回值
         * 加了这个，会导致所有未添加返回指类型的函数都加了标记（容易打击大家学习的信心）
         * TODO 可以视情况修改为 warn
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
         */
        '@typescript-eslint/explicit-function-return-type': 'off',

        /**
         * 【关闭】要求明确标记成员变量的可访问性
         * 考虑了一下，这条规则会增减不习惯ts的同学的学习成本，考虑到我们很少使用class，暂时不开启
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
         */
        '@typescript-eslint/explicit-member-accessibility': 'off',

        /**
         * 【关闭】必须明确标识模块导出的函数参数和返回值类型。
         * 规则太过严格，有些返回值是可以推断出来的
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
         */
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        /**
         * 参考 func-call-spacing
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
         */
        '@typescript-eslint/func-call-spacing': rules['func-call-spacing'],
        'func-call-spacing': 'off',

        /**
         * 参考 indent
         * 规则似乎有bug，所以不用了
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
         */
        // '@typescript-eslint/indent': rules.indent,
        // indent: 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
         */
        '@typescript-eslint/init-declarations': 'off',
        'init-declarations': 'off',

        /**
         * 【严重】关键字前后的空格规则
         * 前后都开启空格
         * 参考 keyword-spacing
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
         */
        '@typescript-eslint/keyword-spacing': rules['keyword-spacing'],
        'keyword-spacing': 'off',

        /**
         * 【严重】类成员前后的空格
         * 参考 lines-between-class-members
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
         */
        '@typescript-eslint/lines-between-class-members': rules['lines-between-class-members'],
        'lines-between-class-members': 'off',

        /**
         * 【严重】interface/type中的分隔符配置
         * 默认情况，使用逗号
         * interface 中，使用分号
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
         */
        '@typescript-eslint/member-delimiter-style': [
          'error', {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
          },
        ],

        /**
         * 【关闭】类成员的顺序
         * 考虑到本身使用 class 的机会很少，且该规则容易增加 ts 的上手门槛，暂时关闭
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
         */
        '@typescript-eslint/member-ordering': 'off',

        /**
         * 【关闭】定义函数类型的两种方式
         * 可以使用普通函数/箭头函数的方式定义函数类型
         * 考虑到该规则容易增加上手成本，且暂时没有看出哪种方式定义更好，所以关闭该规则
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
         */
        '@typescript-eslint/method-signature-style': 'off',

        /**
         * 【关闭】变量命名规范
         * 该调规则有非常多的配置项，时间关系我还没有全部看完
         * TODO 后续可以讨论一下如何配置本条规则
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
         */
        '@typescript-eslint/naming-convention': 'off',

        /**
         * 参考 no-array-constructor
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
         */
        '@typescript-eslint/no-array-constructor': rules['no-array-constructor'],
        'no-array-constructor': 'off',

        /**
         * 【严重】禁止随意将变量与 string 作链接
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
         */
        '@typescript-eslint/no-base-to-string': 'error',

        /**
         * 【严重】禁止容易混淆的非空断言
         * 该规则指的是，在作 == 比较时，如果左侧变量使用非空断言，容易引起阅读时，误以为是 !==
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
         */
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',

        /**
         * 【警告】禁止混淆的返回值
         * 如果一个函数没有返回指，就不应该再取用其返回指
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
         */
        '@typescript-eslint/no-confusing-void-expression': 'warn',

        /**
         * 参考 no-dupe-class-members
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
         */
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-dupe-class-members': 'off',

        /**
         * 参考 no-duplicate-imports
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
         */
        '@typescript-eslint/no-duplicate-imports': rules['no-duplicate-imports'],
        'no-duplicate-imports': 'off',

        /**
         * 【严重】禁止通过 delete 删除时使用变量作为属性名称
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
         */
        '@typescript-eslint/no-dynamic-delete': 'error',

        /**
         * 参考 no-empty-function
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
         */
        '@typescript-eslint/no-empty-function': 'off',
        'no-empty-function': 'off',

        /**
         * 【关闭】禁止空的interface
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
         */
        '@typescript-eslint/no-empty-interface': 'off',

        /**
         * 【严重】禁止将类型明确的变量标记为 any
         * TODO 这个规则可能过于严格，需要使用一段时间
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
         */
        '@typescript-eslint/no-explicit-any': [
          'error', {
            fixToUnknown: true,
            ignoreRestArgs: true,
          },
        ],

        /**
         * 【严重】禁止额外重复的非空断言
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
         */
        '@typescript-eslint/no-extra-non-null-assertion': 'error',

        /**
         * 参考 no-extra-parens
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
         */
        '@typescript-eslint/no-extra-parens': 'off',
        'no-extra-parens': 'off',

        /**
         * 【严重】禁止不必要的分号
         * 参考 no-extra-semi
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
         */
        '@typescript-eslint/no-extra-semi': 'error',
        'no-extra-semi': 'off',

        /**
         * 【警告】禁止不必要的 class
         * 例如如没有成员，或全部为静态成员的 class 是不必要的
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
         */
        '@typescript-eslint/no-extraneous-class': 'warn',

        /**
         * 【关闭】禁止没有处理异常的 promise 对象
         * 如果你没有很好地处理 promise 结果或异常，就会标记警告
         * 我们会有比较多的promise对象，并且不一定要求所有promise对象都被等待
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
         */
        '@typescript-eslint/no-floating-promises': 'off',

        /**
         * 【严重】禁止使用 for-in 遍历数组
         * 因为 for-in 遍历数组，得到的是下标，一般情况下没有意义
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
         */
        '@typescript-eslint/no-for-in-array': 'error',

        /**
         * 【关闭】禁止没有声明格式的 catch
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
         */
        '@typescript-eslint/no-implicit-any-catch': 'off',

        /**
         * 参考 no-implied-eval
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
         */
        '@typescript-eslint/no-implied-eval': rules['no-implied-eval'],
        'no-implied-eval': 'off',

        /**
         * 【关闭】禁止不可推断的类型
         * 同时，这条规则会禁止声明可推断类型的type，感觉并不是那么好，所以关闭了
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
         */
        '@typescript-eslint/no-inferrable-types': 'off',

        /**
         * 参考 no-invalid-this
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
         */
        '@typescript-eslint/no-invalid-this': 'off',
        'no-invalid-this': 'off',

        /**
         * 【严重】禁止无效的 void 类型
         * void 类型应该只用于描述函数的返回值，而不应该描述变量
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
         */
        '@typescript-eslint/no-invalid-void-type': 'error',

        /**
         * 参考 no-loop-func
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
         */
        '@typescript-eslint/no-loop-func': 'off',
        'no-loop-func': 'off',

        /**
         * 参考 no-loss-of-precision
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
         */
        '@typescript-eslint/no-loss-of-precision': rules['no-loss-of-precision'],
        'no-loss-of-precision': 'off',

        /**
         * 参考 no-magic-numbers
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
         */
        '@typescript-eslint/no-magic-numbers': 'off',
        'no-magic-numbers': 'off',

        /**
         * 【严重】构造函数声明，禁止使用 new 而要使用 constructor
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
         */
        '@typescript-eslint/no-misused-new': 'error',

        /**
         * 【严重】禁止没有正确处理 Promise
         * 容易遇到难以修复的情况
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
         */
        '@typescript-eslint/no-misused-promises': 'off',

        /**
         * 【严重】禁止使用 module 或 namespace 关键字
         * 在 ES2015 模块化规范推出后，就不需要再使用这种方式了。
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
         */
        '@typescript-eslint/no-namespace': 'error',

        /**
         * 【严重】禁止可选链与非空断言共同使用
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        /**
         * 【警告】禁止使用非空断言
         * 这条规则的目的是防止大家太多依赖非空断言
         * 一般来说，出现非空断言是类型定义不合理造成的（除了React组件的默认值问题）
         * 所以我们应该尽量少使用非空断言，如果真的需要空校验，请使用可选链
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
         */
        '@typescript-eslint/no-non-null-assertion': 'warn',

        /**
         * 【严重】禁止再构造函数上标记类成员变量
         * 因为这种方式会使使用者混淆
         * 定义类时就应该明确地标记清楚所有成员变量
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
         */
        '@typescript-eslint/no-parameter-properties': 'error',

        /**
         * 参考 no-redeclare
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
         */
        '@typescript-eslint/no-redeclare': 'error',
        'no-redeclare': 'off',

        /**
         * 【警告】禁止使用require引入模块
         * 确实存在一些场景是需要使用require的，所以级别为警告
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
         */
        '@typescript-eslint/no-require-imports': 'warn',

        /**
         * 参考 no-shadow
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
         */
        '@typescript-eslint/no-shadow': rules['no-shadow'],
        'no-shadow': 'off',

        /**
         * 【严重】禁止为 this 设置别名
         * 我们可以使用箭头函数解决 this 的指向问题，所以别保存 this 的别名
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
         */
        '@typescript-eslint/no-this-alias': 'error',

        /**
         * 参考 no-throw-literal
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
         */
        '@typescript-eslint/no-throw-literal': rules['no-throw-literal'],
        'no-throw-literal': 'off',

        /**
         * 【关闭】禁止使用 type 的别名
         * 当定义 type 的别名时，编译器并没有生成新的 type，而是标记为简单类型的联合/交际等运算
         * 这样可能导致一些类型的定义是多余的
         * TODO 大概能理解本条规则的意思，但我暂时没有发现违反本条规则的场景和后果，暂时关闭
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
         */
        '@typescript-eslint/no-type-alias': 'off',

        /**
         * 【严重】禁止无意义的 bool 值比较
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        /**
         * 【警告】禁止不必要的表达式
         * 该条规则不需要过于严格
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
         */
        '@typescript-eslint/no-unnecessary-condition': 'warn',

        /**
         * 【严重】禁止不必要的限定符
         * 这条规则的目的是让开发者明白作用域的概念，并不是任何时候都需要作用域限定符
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'error',

        /**
         * 【关闭】禁止不必要的泛型类型
         * 显示地标记泛型类型，可能可以更便于阅读，所以这里关闭该条规则
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',

        /**
         * 【严重】禁止不必要的类型转换
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        /**
         * 【严重】禁止不必要的类型修饰
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
         */
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',

        /**
         * 【警告】禁止不安全的类型变换
         * 将 any 类型赋值给别的类型，是会造成类型安全问题的
         * 但强制开启本条规则可能会导致上手困难，因此设置为警告级别
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
         */
        '@typescript-eslint/no-unsafe-assignment': 'warn',

        /**
         * 【警告】禁止不安全的函数调用
         * 如果调用函数时，不能安全地判断其类型为函数，则很可能在代码中留下隐患
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
         */
        '@typescript-eslint/no-unsafe-call': 'warn',

        /**
         * 【警告】禁止不安全的成员访问
         * 如果在访问某对象的成员时，不能安全地判断该对象是安全的（非空，且包含该成员），会在代码中留下隐患
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
         */
        '@typescript-eslint/no-unsafe-member-access': 'warn',

        /**
         * 【警告】禁止不安全的返回值
         * 禁止返回带有 any 的内容
         * TODO 这条规则可能过于严格，意图是很好的，需要执行后观察影响
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
         */
        '@typescript-eslint/no-unsafe-return': 'warn',

        /**
         * 参考 no-unused-expressions
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
         */
        '@typescript-eslint/no-unused-expressions': rules['no-unused-expressions'],
        'no-unused-expressions': 'off',

        /**
         * 参考 no-unused-vars
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
         */
        '@typescript-eslint/no-unused-vars': rules['no-unused-vars'],
        'no-unused-vars': 'off',

        /**
         * 参考 no-useless-constructor
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
         */
        '@typescript-eslint/no-useless-constructor': rules['no-useless-constructor'],
        'no-useless-constructor': 'off',

        /**
         * 【关闭】禁止使用 var 的方式存放 require 的模块
         * 这个场景几乎没有，在业务代码中很少使用 require。但在非业务代码中，require 有可能是必要的
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
         */
        '@typescript-eslint/no-var-requires': 'off',

        /**
         * 【警告】禁止可能为空的内容做类型转换
         * 推荐使用非空断言做转换
         * TODO 这条规则要再根据实际场景，看看起到的作用以及影响
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
         */
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn',

        /**
         * 【严重】不变的变量，应该使用 const 定义
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
         */
        '@typescript-eslint/prefer-as-const': 'error',

        /**
         * 【严重】强制枚举初始值
         * 不应该使用默认生成的值作为初始值
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
         */
        '@typescript-eslint/prefer-enum-initializers': 'error',

        /**
         * 【关闭】使用 for-of 遍历数组
         * 暂时没有发现违反规则带来的影响，先关闭
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
         */
        '@typescript-eslint/prefer-for-of': 'off',

        /**
         * 【严重】不要使用 interface 或 type 的方式定义函数类型
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
         */
        '@typescript-eslint/prefer-function-type': 'error',

        /**
         * 【警告】使用 includes 代替 indexOf
         * 对于字符串/数组的内容查找，应该使用 includes 以获得更好的可读性
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
         */
        '@typescript-eslint/prefer-includes': 'warn',

        /**
         * 【严重】要求使用字面量作为枚举值
         * 防止运行时枚举值发生变化，导致一些根据枚举值做的运算结果产生变化
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
         */
        '@typescript-eslint/prefer-literal-enum-member': 'error',

        /**
         * 【关闭】使用 namespace 关键字代替 module
         * 上面有规则是禁止 namespace 和 module 的，所以这条规则的意义不大
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
         */
        '@typescript-eslint/prefer-namespace-keyword': 'off',

        /**
         * 【警告】推荐使用空值合并操作符（使用 ?? 代替 || ）
         * 防止 0 '' false 等值影响了空校验
         * 比较担心是否会有场景是必须要用 || 的，所以设置级别为警告
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',

        /**
         * 【严重】推荐使用可选链
         * 但要注意，可选链可以算是连续&&判断的语法糖，不要滥用可选链。
         * 当你滥用可选链的时候，想象一下，你在写大量的连续&&判断。
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
         */
        '@typescript-eslint/prefer-optional-chain': 'error',

        /**
         * 【警告】要求标记不被改变的私有变量为 readonly
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
         */
        '@typescript-eslint/prefer-readonly': 'warn',

        /**
         * 【关闭】函数参数需要使用 readonly 修饰
         * TODO 规则没有问题，但是执行起来似乎比较麻烦，所以级别将为警告，看后续使用的情况
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',

        /**
         * 【严重】建议使用泛型的方式定义 reduce 函数
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
         */
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',

        /**
         * 【警告】建议使用正则表达式的 exec 代替 string.match
         * 场景比较少，暂时降为警告
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
         */
        '@typescript-eslint/prefer-regexp-exec': 'warn',

        /**
         * 【严重】建议使用 startsWith endsWith 代替 slice indexOf substr 等字符串前后缀判断的操作
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',

        /**
         * 【严重】使用 @ts-expect-error 代替 @ts-ignore
         * 如果你需要通过 @ts-ignore 抑制错误提示，但当错误修复之后，你可能会将其遗忘在代码中
         * 使用 @ts-expect-error，如果被抑制的行不包含错误，则反而会报错提示
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
         */
        '@typescript-eslint/prefer-ts-expect-error': 'error',

        /**
         * 【关闭】强制要求返回 promise 的函数，使用 async 修饰
         * 感觉可能会存在部分场景的问题，暂时不考虑
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
         */
        '@typescript-eslint/promise-function-async': 'off',

        /**
         * 参考 quotes
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
         */
        '@typescript-eslint/quotes': rules.quotes,
        quotes: 'off',

        /**
         * 【关闭】要求 array.sort 必须传入回调函数
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
         */
        '@typescript-eslint/require-array-sort-compare': 'off',

        /**
         * 参考 require-await
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
         */
        '@typescript-eslint/require-await': 'off',
        'require-await': 'off',

        /**
         * 【警告】禁止将不同类型的变量相加
         * 可能会碰到 number + string 的情况
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
         */
        '@typescript-eslint/restrict-plus-operands': 'warn',

        /**
         * 【警告】禁止在模板字符串中拼接非 string 类型的变量
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
         */
        '@typescript-eslint/restrict-template-expressions': [
          'warn', {
            allowNumber: true,
            allowBoolean: true,
            allowAny: true,
          },
        ],

        /**
         * 参考 no-return-await
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
         */
        '@typescript-eslint/return-await': rules['no-return-await'],
        'no-return-await': 'off',

        /**
         * 参考 semi
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
         */
        '@typescript-eslint/semi': rules.semi,
        semi: 'off',

        /**
         * 参考 space-before-function-paren
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
         */
        '@typescript-eslint/space-before-function-paren': rules['space-before-function-paren'],
        'space-before-function-paren': 'off',

        /**
         * 参考 space-infix-ops
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
         */
        '@typescript-eslint/space-infix-ops': rules['space-infix-ops'],
        'space-infix-ops': 'off',

        /**
         * 【关闭】严格的 bool 表达式
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
         */
        '@typescript-eslint/strict-boolean-expressions': 'off',

        /**
         * 【警告】switch 语句中，检查是否类型的所有值都考虑到了
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'warn',

        /**
         * 【严重】禁止使用 /// 来引入
         * 使用 import 即可
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
         */
        '@typescript-eslint/triple-slash-reference': 'error',

        /**
         * 【严重】typescript 的空格规则
         * 使用的默认配置，请点开链接查看详情
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
         */
        '@typescript-eslint/type-annotation-spacing': 'error',

        /**
         * 【关闭】强制要求标记类型
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
         */
        '@typescript-eslint/typedef': 'off',

        /**
         * 【警告】禁止单独调用 class 的成员方法function(非箭头函数)
         * 避免造成 this 指向的混乱
         * 但该规则可能会造成较大影响，所以设为警告
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
         */
        '@typescript-eslint/unbound-method': 'warn',

        /**
         * 【警告】当两个重载函数定义可被联合/可选的方式合并，就会提出警告
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
         */
        '@typescript-eslint/unified-signatures': 'warn',
      },
    },
  ],
};
