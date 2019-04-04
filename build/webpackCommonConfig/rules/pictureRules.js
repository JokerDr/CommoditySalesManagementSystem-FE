const {resolve} = require('../../untils');
// const devMode = process.env.NODE_ENV !== 'production'

module.exports = [
    {
      test: /\.(png|jpg|gif|svg)$/,
      include:resolve('src'),
      use: [
        '@svgr/webpack',
        {
        // loader: 'file-loader',
        // options: {
        //   name(file) {
        //     return devMode ? '[path][name].[ext]' : '[hash].[ext]';
        //   },
        //   publicPath: 'assets/',
        //   outputPath: 'images/'
        // }
      }]
    }
]