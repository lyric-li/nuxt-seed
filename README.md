# nuxt-seed

> Nuxt 种子项目

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## 开发规范

### API

统一管理模块的 url 请求地址， 如：`api/xxx.js`

### ASSETS

静态资源存放目录

styles CSS 样式表目录

- modify.less 重新定义 Vant UI 主题样式
- reset.less 覆盖 Vant UI 原生样式
- theme.less 主题样式

### SVG

- 引入方式

  将 xxx.svg 图标放入 `assets/sprite/svg` 目录下

- 使用方式

  ```
  <svg-icon name="xxx"/>
  ```

### CSS

CSS 遵从 [`BEM`](https://www.jianshu.com/p/54b000099217) 规范

.块__元素--修饰符{}

- `block` 代表了更高级别的抽象或组件
- `block__element` 代表 `block` 的后代，用于形成一个完整的 `block` 的整体
- `block--modifier` 代表 `block` 的不同状态或不同版本

## 技术栈

### 基础框架

- [vue](https://cn.vuejs.org/)
- [vue-router](https://router.vuejs.org/zh/)
- [vuex](https://vuex.vuejs.org/zh/)

### 第三方插件

- [vant](https://youzan.github.io/vant/#/zh-CN/home)
- [axios](https://github.com/axios/axios)
- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [amfe-flexible](https://github.com/amfe/lib-flexible)


## Git Commit 规范

用于说明 commit 的类别，只允许使用下面7个标识。

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动


## 注意事项

- 由于开启了 `eslint` 和 `stylelint`, 推荐 `vscode` 安装 `eslint` 和 `stylelint-plus` 并开启保存自动修复功能
