const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const MinifyPlugin = require('babel-minify-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const { CheckerPlugin } = require('awesome-typescript-loader');
const {resolve} = require('../untils')

const plugins = [
  new CleanWebpackPlugin(), // 2.0以上的版本与1.0的设置不同
  // new webpack.optimize.AggressiveSplittingPlugin({  //插件启用后会因为无法显示入口文件内容，且webpack也不会提示错误
  //   minSize: 30000,
  //   maxSize: 50000
  // }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  // new MinifyPlugin({}, {
  //   comments: 'falsy'
  // }),
  // new webpack.BannerPlugin({
  //   banner: 'hash:[hash], chunykhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
  // }),
  // new CopyWebpackPlugin([{
  //   from: resolve('src'),
  //   to: 'dist'
  // },
    // {
    //   from: path.join(__dirname, '../src/tpl'),
    //   to: './tpl'
    // }
  // ]),
  // new MiniCssExtractPlugin({ // 替代webpack4之前的extract-text-plugin
  //   // Options similar to the same options in webpackOptions.output
  //   // both options are optional
  //   filename: devMode ? '[name].css' : '[name].[hash].css',
  //   chunkFilename: devMode ? '[id].css' : '[name].[hash].css'
  // }),
  new CheckerPlugin(),
  new webpack.WatchIgnorePlugin([
    /(sa|sc|c)ss\.d\.ts/
  ])
];
module.exports = plugins;