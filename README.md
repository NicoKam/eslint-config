# @orca-fe/eslint-config

orca 前端团队 eslint 代码规范

## 更新记录

- v2.3.2
  - `prefer-destructuring` 增加选项，不对数组进行强制解构
- v2.3.1
  - 升级依赖
  - `max-len` 增加选项 `ignoreStrings: true`
- v2.3.0
  - 升级依赖
- v2.2.0
  - 调整 `@typescript-eslint/no-shadow` ，移除配置项
  - 升级了相关依赖
- v2.0.0
  - 更新 `eslint` 到 8，并降低了 `typescript` 的 `on-unsafe` 规则级别
- v1.0.2
  - 调整 `@typescript-eslint/no-unused-expressions` 规则级别为 `error` 并移除 `options`
- v1.0.0
  - 初始版本发布

## Usage

install dependencies

```bash
npm i eslint typescript @orca-fe/eslint-config -D
```

add `.eslintrc.js`

```javascript
module.exports = {
  extends: '@orca-fe/eslint-config',
};
```
