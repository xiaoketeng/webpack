说明：
    紧接着css分离打包的基础上，实现项目分离img打包
    使用webpack4.0以上的版本，使用插件file-loader来将项目所有image分离打包

#1
    安装：npm install --save-dev file-loader

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
       {//图片打包的规则匹配
           test: /\.(png|jpg|gif)$/,
           use: [
               {
                   loader: 'file-loader',
                   options: {
                       name: '',
                       outputPath: 'images/'
                   }
               }
           ]
       }
       {//css打包规则匹配
           test: /\.css$/,
           use: [
             MiniCssExtractPlugin.loader,
             "css-loader"
           ]
       }
       ]
     }
   }




