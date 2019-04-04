const { resolve }  = require('../../untils');
const antDesignTheme = require('../../../theme')
const MiniCssExtractPluginLoader = require('mini-css-extract-plugin').loader
const devMode = process.env.NODE_ENV !== 'production'

module.exports = [
    {
      test: /\.less/,
      include: resolve('node_modules'),
      use: [
          devMode ? 'style-loader' : MiniCssExtractPluginLoader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
                javascriptEnabled: true,
                modifyVars: antDesignTheme
            }
          }
      ]
    }, {
         test: /\.(sc|sa|c)ss$/,
         include: [resolve('src')],
         use: [
            devMode ? 'style-loader' : MiniCssExtractPluginLoader, 
             {
                 loader: 'cache-loader',
                 options: {
                     cacheDirectory: resolve('.cache-loader')
                 }
             },
             {
                 loader: 'typings-for-css-modules-loader',
                 options: {
                     modules: true,
                     namedExport: true,
                     camelCase: true,
                     sass: true,
                     localIdentName: '_[hash]' //'[name]__[local]__[hash:base64:5]'
                 }
             },
             //     {
             //       loader: 'postcss-loader',
             //       options: {
             //         ident: 'postcss',
             //         plugins: (loader) => [
             //           require('postcss-import')({
             //             root: loader.resourcePath
             //           }),
             //           require('postcss-cssnext')(),
             //           require('cssnano')()
             //         ]
             //       }
             // }, 
             {
                 loader: 'sass-loader',
                 options: {
                     outputStyle: 'expanded',
                     includePaths: [resolve('src/styles')] // 省略该文件夹路径
                 }
             }
         ]
    }

]