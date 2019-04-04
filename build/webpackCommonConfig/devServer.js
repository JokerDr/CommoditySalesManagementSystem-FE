const { resolve } = require('../untils')
module.exports = {
  contentBase: resolve('dist'), //  告诉服务器从哪里提供内容，只有在想提供静态文件时需要
  compress: true, // 一切服务启动gzip压缩
  host: '127.0.0.1', // 指定host地址，可以使用ip访问
  port: '8888',
  hot: true, // 模块热更新
  inline: true, // 启用内联模式，一段处理实时重载的脚本被插入到bundle中，并且构建消息会出现在浏览器控制台
  historyApiFallback: false // 开发但也用用时有用，以来于htm5HistoryuAPI,设置为true时所有的跳转将指向index.html
}