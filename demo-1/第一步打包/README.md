说明
学习如何使用使用webpack打包项目

建立项目
#1：
    mkdir demo && cd demo//新建文件，然后进入文件
    npm init -y//初始化文件生成package.json文件
    npm install webpack webpack-cli --save-dev//在本地安装webpack同时安装webpack-cli,在命令行中运行webpack
#2：
    如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，会发生什么？生成的包将被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字。
    使用插件：HtmlWebpackPlugin
    npm install --save-dev html-webpack-plugin
    作用：在打包文件的时候自动生成index.html文件，里面自动关联打包好的文件里的css或js其他使用到的资源文件
#3
    配置webpack.config.js文件如下

    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
            entry: {//文件入口
                app: './src/index.js'
            },
           plugins: [//HtmlWebpackPlugin插件
                 new HtmlWebpackPlugin({
                    title: 'Output Management'
                 })
           ],
           output: {//打包输出的文件
                filename: '[name].bundle.js',
                path: path.resolve(__dirname, 'dist')
            }
    };

#4 如果想使用命令行npm run build打包文件，在package.json文件里配置"build": "webpack"
    {
      "name": "demo",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "html-webpack-plugin": "^3.2.0",
        "webpack": "^4.19.1",
        "webpack-cli": "^3.1.0"
      }
    }

#5 文件目录结构
    #demo
     |-----src
            |-----index.js//入口文件
     |-----index.html//页面
     |-----package.json//项目的信息描述，版本号，名字等
     |-----package-lock.json//初始化项目，下载各依赖包上传的各个包的信息
     |-----webpack.config.js//打包的文件结构规则配置

 #6 使用npm run build,就可以看到demo文件下多出一个dist文件夹，里面有 两个文件,这两个文件就是打包的文件
      dist
       |------app.bundle.js
       |------index.html




