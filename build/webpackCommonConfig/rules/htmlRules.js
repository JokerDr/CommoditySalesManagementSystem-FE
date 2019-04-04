
module.exports = [
    {
      test: /\.(html|htm)$/,
      use: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader'
    }
]