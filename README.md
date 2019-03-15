## 项目目录

- lib 发布
- dist 测试
- dev 开发测试服务

## 命令

- npm start 打包到 dist 目录，并在 dev 目录起一个服务器，在 examples 目录下编译，并依赖 dist 目录下打包模块
- npm run deploy 打包到 lib，手动发包
- npm run type-build 编译

## 项目特性

- editorconfig 编辑器插件初始化代码格式
- prettier
- ts 编译

## 可定制化设置

- browserslist 设置库的兼容性，由 babel 自动 polyfill
- ts-config 设置
