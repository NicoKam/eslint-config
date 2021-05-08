/**
 * eslint-plugin-react:recommended
 * https://www.npmjs.com/package/eslint-plugin-react
 * recommended为规则页面中打勾的内容，下面是recommended的规则的简短翻译
 *
 *
 * > react/display-name
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/display-name.md
 * 禁止组件定义时缺失组件名
 *
 *
 * > react/jsx-key
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-key.md
 * 禁止数组遍历或迭代器遍历丢失key值
 *
 *
 * > react/jsx-no-comment-textnodes
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-comment-textnodes.md
 * 禁止文本节点中插入注释
 *
 *
 * > react/jsx-no-duplicate-props
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-duplicate-props.md
 * 禁止有重复的属性
 *
 *
 * > react/jsx-no-target-blank
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-target-blank.md
 * 禁止a标签使用不安全的 `target='_blank`，通常携带上rel='noreferrer'
 *
 *
 * > react/jsx-no-undef
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-undef.md
 * 禁止在JSX中使用全局变量，会被视为未声明
 *
 *
 * > react/jsx-uses-react
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md
 * 禁止React引入后未被使用
 *
 *
 * > react/jsx-uses-vars
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-vars.md
 * 禁止使用中的变量被错误的标记为未使用
 *
 *
 * > react/no-children-prop
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-children-prop.md
 * 禁止使用props传递children组件
 *
 *
 * > react/no-danger-with-children
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-danger-with-children.md
 * 禁止同时使用children和dangerouslySetInnerHTML
 *
 *
 * > react/no-deprecated
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-deprecated.md
 * 禁止使用过时的方法，包括组件生命周期方法
 *
 *
 * > react/no-direct-mutation-state
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-direct-mutation-state.md
 * 禁止直接更改this.state的状态，使用setState更改
 *
 *
 * > react/no-find-dom-node
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-find-dom-node.md
 * 禁止使用findDOMNode，使用ref
 *
 *
 * > react/no-is-mounted
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-is-mounted.md
 * 禁止使用isMounted，isMounted（…）在纯 react.js 类中已经被弃用
 *
 *
 * > react/no-render-return-value
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-render-return-value.md
 * 禁止使用ReactDOM.render的返回值
 *
 *
 * > react/no-string-refs
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-string-refs.md
 * 禁止使用字符串作为ref引用的值，React已经不推荐了，使用React.createRef()
 *
 *
 * > react/no-unescaped-entities
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unescaped-entities.md
 *  禁止使用无效的字符类型，可以使用html代码代替或者使用ES6的模板字符串包裹住
 *  >  ==>  &gt;
 *  <  ==>  &lt;
 *  "  ==>  &quot;, &ldquo;, &#34; or &rdquo;
 *  '  ==>  &apos;, &lsquo;, &#39; or &rsquo;
 *
 *
 * > react/no-unknown-property
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unknown-property.md
 * 禁止使用未知的DOM属性
 *
 *
 * > react/prop-types
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md
 * 禁止在组件定义中缺少props验证
 *
 *
 * > react/react-in-jsx-scope
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md
 * 禁止在使用JSX时丢失React
 *
 *
 * > react/require-render-return
 * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-render-return.md
 * 强制类在render函数中要有返回值
 */


module.exports = {
  extends: ['plugin:react/recommended'],
  // 以下内容是在react/recommended的基础上，再做出的一些调整
  rules: {

    /**
     * 【关闭】我们很多情况下，使用函数，都是没有使用display-name的
     */
    'react/display-name': ['off'],

    /**
     * 【关闭】所有props必须有定义
     * 目前interface很多会使用继承，导致该规则误报
     */
    'react/prop-types': ['off'],

    /**
     * 【关闭】布尔属性的props传值以is或has作为前缀
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/boolean-prop-naming.md
     */
    'react/boolean-prop-naming': ['off', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],

    /**
     * 【严重】button标签要有明确的type属性
     *  type属性包括：reset、submit、button
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/button-has-type.md
     */
    'react/button-has-type': 'error',

    /**
     * 【严重】默认属性必须匹配属性类型，不允许有无关的默认属性
     * TODO 注意该条规则是否会与typescript冲突
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/default-props-match-prop-types.md
     */
    'react/default-props-match-prop-types': [
      'error',
      // 必传属性可以允许有默认值
      { allowRequiredDefaults: true },
    ],

    /**
     * 【严重】state/props/context 使用解构赋值
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/destructuring-assignment.md
     */
    'react/destructuring-assignment': ['error', 'always'],

    /**
     * 【关闭】禁止组件有明确的props属性，例如className和style
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-component-props.md
     */
    'react/forbid-component-props': 'off',

    /**
     * 【关闭】禁止在dom元素上使用的props属性
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-dom-props.md
     */
    'react/forbid-dom-props': 'off',

    /**
     * 【关闭】禁止使用特定的元素组件
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-elements.md
     */
    'react/forbid-elements': 'off',

    /**
     * 【关闭】禁止外来的propTypes属性
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-foreign-prop-types.md
     */
    'react/forbid-foreign-prop-types': 'off',

    /**
     * 【关闭】禁止特定的propTypes属性，不直接使用array/object/any类型，用arrayOf/shape代替
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-prop-types.md
     */
    'react/forbid-prop-types': 'off',

    /**
     * 【关闭】无状态组件要有明确的函数类型
     *  组件也能写成箭头函数那种无状态组件
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md
     */
    'react/function-component-definition': 'off',

    /**
     * 【严重】禁止在setState中直接使用this.state
     *  可以先把this.state里的变量解构出来
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-access-state-in-setstate.md
     */
    'react/no-access-state-in-setstate': 'error',

    /**
     * 【关闭】两个行内元素用空格隔开
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-adjacent-inline-elements.md
     */
    'react/no-adjacent-inline-elements': 'off',

    /**
     * 【关闭】禁止在数组中使用index作为key值
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-array-index-key.md
     */
    'react/no-array-index-key': 'off',

    /**
     * 【警告】禁止使用危险的JSX属性
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-danger.md
     */
    'react/no-danger': 'warn',

    /**
     * 【严重】禁止在componentDidMount生命周期setState
     * 从接口获取数据后经常需要在该生命周期setState，保持和react/no-did-update-set-state一致的方法
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-did-mount-set-state.md
     */
    'react/no-did-mount-set-state': 'error',

    /**
     * 【严重】禁止在componentDidUpdate生命周期setState
     *  看我们项目中也有这种习惯，可以另外写一个函数，之后在componentDidUpdate内调用
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-did-update-set-state.md
     */
    'react/no-did-update-set-state': 'error',

    /**
     * 【关闭】禁止每个文件中定义多个组件
     * 一般很少有人会这样做，而通常这么做，可能是有特殊原因的，所以关闭该规则
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-multi-comp.md
     */
    'react/no-multi-comp': 'off',

    /**
     * 【严重】当组件继承自PureComponent时，禁止使用shouldComponentUpdate生命周期
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-redundant-should-component-update.md
     */
    'react/no-redundant-should-component-update': 'error',

    /**
     * 【关闭】无状态组件禁止使用setState
     * 有特殊场景
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-set-state.md
     */
    'react/no-set-state': 'off',

    /**
     * 【严重】禁止在无状态组件中使用this
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-this-in-sfc.md
     */
    'react/no-this-in-sfc': 'error',

    /**
     * 【严重】禁止生命周期和静态属性声明的大小写错误
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-typos.md
     */
    'react/no-typos': 'error',

    /**
     * 【严重】禁止使用不安全的生命周期（componentWiiUpdate componentWillReceiveProps componentWillMount）
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unsafe.md
     */
    'react/no-unsafe': 'error',

    /**
     * 【严重】禁止定义未被使用的propTypes属性
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-prop-types.md
     */
    'react/no-unused-prop-types': 'error',

    /**
     * 【严重】禁止定义未被使用的state值
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-state.md
     */
    'react/no-unused-state': 'error',

    /**
     * 【严重】禁止在componentWillUpdate使用setState
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-will-update-set-state.md
     */
    'react/no-will-update-set-state': 'error',

    /**
     * 【严重】推荐使用ES6的类
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-es6-class.md
     */
    'react/prefer-es6-class': ['error', 'always'],

    /**
     * 【关闭】推荐使用无状态组件
     *  当前类组件也可以使用
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-stateless-function.md
     */
    'react/prefer-stateless-function': 'off',

    /**
     * 【严重】需要添加正确的默认值
     */
    'react/require-default-props': 'error',

    /**
     * 【关闭】 强制类组件必须有shouldComponentUpdate生命周期
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-optimization.md
     */
    'react/require-optimization': 'off',

    /**
     * 【严重】禁止没有内容的元素有闭合标签，写成单标签形式
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/self-closing-comp.md
     */
    'react/self-closing-comp': 'error',

    /**
     * 【严重】强制组件的静态属性、生命周期、其他函数和render函数按照顺序书写
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-comp.md
     */
    'react/sort-comp': [
      'error', {
        order: [
          'static-methods',
          'static-variables',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'render',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'getDefaultProps',
            'state',
            'constructor',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],

    /**
     * 【关闭】强制组件定义的propTypes按照字母表的顺序排序
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-prop-types.md
     */
    'react/sort-prop-types': 'off',

    /**
     * 【关闭】强制state初始化必须放在constructor内或者作为类的属性
     *  项目中两种写法都可以，所以关闭
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/state-in-constructor.md
     */
    'react/state-in-constructor': 'off',

    /**
     * 【关闭】强制组件的静态属性摆放的位置
     * 写外面以后，typescript会报错
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/static-property-placement.md
     */
    'react/static-property-placement': [
      'off',
      // 规范了写成组件的属性形式
      'property assignment',
    ],

    /**
     * 【严重】强制style属性值是对象形式
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/style-prop-object.md
     */
    'react/style-prop-object': 'error',

    /**
     * 【严重】禁止空DOM元素接收子元素
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/void-dom-elements-no-children.md
     */
    'react/void-dom-elements-no-children': 'error',

    /**
     * 【严重】组件布尔值的属性必须写 someprop={true}
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-boolean-value.md
     */
    'react/jsx-boolean-value': 'error',

    /**
     * 【关闭】强迫在JSX和内容之间加花括号
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-child-element-spacing.md
     */
    'react/jsx-child-element-spacing': 'off',

    /**
     * 【严重】闭合标签的反尖括号必须与起始标签的左尖括号的那一行对齐
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-closing-bracket-location.md
     */
    'react/jsx-closing-bracket-location': [
      'error',
      'tag-aligned',
    ],

    /**
     * 【严重】闭合标签的位置必须与起始标签对齐，可单行对齐或跨行对齐
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-closing-tag-location.md
     */
    'react/jsx-closing-tag-location': 'error',

    /**
     * 【严重】在props属性或chidren内使用花括号或禁止非必要的花括号
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-brace-presence.md
     */
    'react/jsx-curly-brace-presence': [
      'error', {
        props: 'never',
        children: 'never',
      },
    ],

    /**
     * 【严重】强制JSX中的花括号换行
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-newline.md
     */
    'react/jsx-curly-newline': [
      'error', {
        // JSX表达式在花括号内只占据一行时，不允许在花括号内直接有换行符
        singleline: 'forbid',
      },
    ],

    /**
     * 【严重】强制JSX中花括号两边不留空格
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-spacing.md
     */
    'react/jsx-curly-spacing': [
      'error',
      {
        // JSX属性的花括号里面两边不允许有空格,即不能写成 `name={ name }`
        when: 'never',
        // 允许使用跨越多行的花括号
        attributes: { allowMultiline: true },
        // JSX标签的内容也不允许有空格，即不能写成 `<div>{ name }</div>`
        children: true,
        // 属性值是对象的两边也不允许有空格，即不能写成 `foo={ {bar: true, baz: true} }`
        spacing: { objectLiterals: 'never' },
      },
    ],

    /**
     * 【严重】强制JSX中等号两边不留空格
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-equals-spacing.md
     */
    'react/jsx-equals-spacing': ['error', 'never'],

    /**
     * 【严重】限制文件扩展名
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],

    /**
     * 【严重】限制首个属性的位置
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-first-prop-new-line.md
     */
    'react/jsx-first-prop-new-line': 'error',

    /**
     * 【严重】强制使用React.fragments的缩写
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-fragments.md
     */
    'react/jsx-fragments': ['error', 'syntax'],

    /**
     * 【关闭】强制事件处理命名
     * 这个只能设置一个，不太好，所以先关闭了
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-handler-names.md
     */
    'react/jsx-handler-names': 'off',

    /**
     * 【严重】验证JSX的缩进方式，习惯性为2个
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-indent.md
     */
    'react/jsx-indent': ['error', 2],

    /**
     * 【严重】验证props属性的缩进方式，习惯性为2个
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-indent-props.md
     */
    'react/jsx-indent-props': ['error', 2],

    /**
     * 【警告】验证JSX的最大深度
     * 目前先设置最大嵌套5层，再多就要考虑拆分了
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-max-depth.md
     */
    'react/jsx-max-depth': ['error', { max: 5 }],

    /**
     * 【严重】限制一行内属性的最大数量
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-max-props-per-line.md
     */
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    /**
     * 【关闭】禁止使用 bind绑定函数或箭头函数的使用
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-bind.md
     */
    'react/jsx-no-bind': 'off',

    /**
     * 【关闭】禁止在JSX中字符字面量
     *  没有必要限制，可以直接在标签中写内容
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-literals.md
     */
    'react/jsx-no-literals': 'off',

    /**
     * 【严重】禁止使用 `javascript: URLs` 链接
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-script-url.md
     */
    'react/jsx-no-script-url': 'error',

    /**
     * 【严重】禁止使用不必要的fragments片段
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-useless-fragment.md
     */
    'react/jsx-no-useless-fragment': 'error',

    /**
     * 【严重】限制一行内JSX表达式的数量
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-one-expression-per-line.md
     */
    'react/jsx-one-expression-per-line': [
      'error', {
        allow: 'single-child',
      },
    ],

    /**
     * 【严重】强制用户自定义的组件使用`PascalCase`命名法
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-pascal-case.md
     */
    'react/jsx-pascal-case': 'error',

    /**
     * 【严重】禁止JSX属性内间隔多余的空格
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-props-no-multi-spaces.md
     */
    'react/jsx-props-no-multi-spaces': 'error',

    /**
     * 【关闭】禁止使用props透传{...props}
     *  有时候属性太多了，经常使用到
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-props-no-spreading.md
     */
    'react/jsx-props-no-spreading': 'off',

    /**
     * 【关闭】强制默认属性按照字母表的顺序排序
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-default-props.md
     */
    'react/jsx-sort-default-props': 'off',

    /**
     * 【关闭】强制JSX属性按照字母表的顺序排序
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': 'off',

    /**
     * 【严重】验证JSX中闭合标签前的控制
     *  此条规则与下一条的beforeSelfClosing重复了，所以注释了
     */

    /**
     * 【严重】验证起始标签和闭合标签两边的空格
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-tag-spacing.md
     */
    'react/jsx-tag-spacing': [
      'error',
      {
        // `</` 和 `/>` 两个标签，每个标签之间不允许有空格，即不允许写成 `< /` 和 `/ >`
        closingSlash: 'never',
        // `/>` 单闭合标签之前留一个空格
        beforeSelfClosing: 'always',
        // `</` 和 `<` 起始标签后面不允许有空格
        afterOpening: 'never',
        // `>` 闭合标签前不允许有空格
        beforeClosing: 'never',
      },
    ],

    /**
     * 【严重】禁止多行JSX未用圆括号括起来
     *  parens-new-line：JSX在新的一行书写
     *  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-wrap-multilines.md
     */
    'react/jsx-wrap-multilines': [
      'error', {
        // 声明JSX变量
        declaration: 'parens-new-line',
        // 声明了变量后赋值
        assignment: 'parens-new-line',
        // return语句
        return: 'parens-new-line',
        // 箭头函数
        arrow: 'parens-new-line',
        // 条件判断（三元运算符）
        condition: 'parens-new-line',
        // 逻辑判断（与或非）
        logical: 'parens-new-line',
        // 属性值是JSX
        prop: 'parens-new-line',
      },
    ],

  },
};


/**
 * 未添加的规则
 * react/prefer-read-only-props：强制某些props属性只读（flow使用）
 */
