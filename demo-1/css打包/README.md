说明：
    紧接着demo的基础上，实现项目分离css打包
    使用webpack4.0以上的版本，使用插件mini-css-extract-plugin来将项目所有css分离打包

#1
    安装：npm install mini-css-extract-plugin

#2
   在webpack.config.js的配置
   const MiniCssExtractPlugin = require("mini-css-extract-plugin");
   module.exports = {
     optimization: {
       splitChunks: {
         cacheGroups: {
           styles: {
             name: 'styles',
             test: /\.css$/,
             chunks: 'all',
             enforce: true
           }
         }
       }
     },
     plugins: [
       new MiniCssExtractPlugin({
         filename: "文件名/[name].css",//这里可以给css加个文件名
       })
     ],
     module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             MiniCssExtractPlugin.loader,
             "css-loader"
           ]
         }
       ]
     }
   }



