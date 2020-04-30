# DW-Visualization-Web

项目采用Vue搭建
## 1.项目技术栈
### 1.1 Vue
[Vue](https://cn.vuejs.org/)是一套用于构建用户界面的渐进式框架。本项目基于Vue，并结合了Vue路由工具-[Vue-router](https://router.vuejs.org/zh/)，以及Vue状态管理工具-[Vuex](https://vuex.vuejs.org/zh/)
### 1.2 webpack
[webpack](https://www.webpackjs.com/)是一套用于打包的工具。
### 1.3 echarts
[echarts](https://www.echartsjs.com/zh/index.html)是百度开发的可视化图标库。
## 2.项目依赖
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
step 6 安装DevTools
## 3.src下项目结构
项目目录 | 描述
:--: | :--:
pages | 页面组件
request | ajax相关的路由请求信息
router | 项目路由
service | 服务层，主要是公共接口、逻辑
store | Vuex全局状态管理
style | 全局通用的样式
utils | 项目通用的工具防范，例如时间处理工具
### 3.1Vue单文件组件
``` html
<template>
    <div>  
        <!-- 最外层必须包裹一个元素 -->
    </div>
</template>
<script>

export default {
    components: {
        //注册组件，必须先通过import语句引入
    },
    props: {
        // 传入单文件组件的数据
    },
    data(){
        return {
            // data必须返回一个对象
        }
    },
    computed(){
        // 计算属性
    },
    watch: {
        // 监听器
    },
    methods:{
        // 方法
    },
    created(){
        // 声明周期钩子函数
    },
    mounted(){
        // 声明周期钩子函数
    },
    destroyed(){
        // 生命周期钩子函数
    }
}
</script>

<style scoped lang="scss">
    /* scoped表示样式为组件私有 lang=scss 代表css语言用的是sass框架 */
</style>

```