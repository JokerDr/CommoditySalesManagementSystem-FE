const webpackEntry = require('./entry');
const path = require('path');
const webpackOptimization = require('./optimization');
const webpackOutput = require('./output');
const webpackPlugins = require('./plugins');
const webpackModule = require('./modules');
const webpackResolve = require('./resolve');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const files = glob.sync('../src/apps/**/*.tsx');
const HtmlWebpackPlugins = [];

files.forEach((elem) => {
  // const name = /.*\/(apps\/.*?\/index)\.js/.exec(elem)[1];
  const path = elem.split('/');
  const file = path.pop();
  const name = file.split('.')[0];
  entrys[name] = '../src/apps/' + name + '/' + name + '.tsx';
  webpackEntry[name] = elem;
  HtmlWebpackPlugins.push(
    new HtmlWebpackPlugin({
      template: elem,
      chunks: [name, 'commons'],
      filename: file,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributesQuotes: true
      }
    })
  )
});

module.exports = {
  output: webpackOutput,
  entry: webpackEntry,
  // optimization: webpackOptimization,
  plugins: [
    ...HtmlWebpackPlugins,
    ...webpackPlugins,
    new HtmlWebpackPlugin({
      template: 'build/tpl/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributesQuotes: true
      }
    })
  ],
  module: webpackModule,
  resolve: webpackResolve,
  // recordsOutputPath: path.join(__dirname, '../dist', 'records.json')
}