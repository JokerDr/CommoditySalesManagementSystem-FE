const merge = require('webpack-merge');
const common = require('./webpackCommonConfig/webpack.common.js');

module.exports = merge(common, {
  mode : 'production'
})