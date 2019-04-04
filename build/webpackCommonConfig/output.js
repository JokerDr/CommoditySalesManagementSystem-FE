const { resolve } = require('../untils');
const outPut = {
  filename: '[name].bundle.js',
  chunkFilename: '[name].bundle.js',
  path: resolve('dist'),
  publicPath: 'http://127.0.0.1:8888/'
  // chunkhash: "[chunkhash].js"
};
module.exports = outPut;