const merge = require('webpack-merge')
const common = require('./webpackCommonConfig/webpack.common.js');
const devServer = require('./webpackCommonConfig/devServer');
const webpack = require('webpack');

module.exports = merge(common, {
  devServer: devServer,
  plugins: [
    new webpack.HotModuleReplacementPlugin() // webpack 内置热更新软件
  ],
  mode: 'development'
});