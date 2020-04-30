# DW-Visualization-Web

项目采用Vue搭建

## 项目依赖
step 1 安装[nodejs](https://nodejs.org/en/)。安装node是为了搭建前端的开发环境。下载node的同时会下载npm。npm是nodejs的包管理工具。
step 2 设置npm镜像源（淘宝镜像下载速度快）
``` js
    npm config set registry https://registry.npm.taobao.org --global
```
step 3 检测镜像是否成功
``` js
    npm config get registry  //https://registry.npm.taobao.org/
```
step 4 检查node npm 版本。通过命令输出版本号代表成功。
``` js
    node -v //v10.15.3
    npm -v // 6.13.7
```
step 5 安装vue项目依赖
```js
    npm install //安装项目依赖
    npm run dev //运行项目
    npm run build //打包项目
```
