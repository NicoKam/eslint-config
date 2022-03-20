# @orca-fe/eslint-config

orca 前端团队 eslint 代码规范

## 更新记录

- v2.2.0
  - 调整 @typescript-eslint/no-shadow ，移除配置项
  - 升级了相关依赖
- v1.0.2
  - 调整 @typescript-eslint/no-unused-expressions 规则级别为 `error` 并移除 `options`
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
