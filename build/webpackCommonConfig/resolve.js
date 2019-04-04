const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const { resolve } = require('../untils');
module.exports = {
  // alias: { // 路径替换
  //    mobx: resolve('node_modules/mobx/lib/mobx.es6.js')
  // },
  //   mainFields: [],
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  plugins: [
      new TsConfigPathsPlugin({
        // 配置文件引入tsconfig.json
        configFileName: resolve('tsconfig.json')
      })
  ],
    // modules: ['../../src/components', 'node_modules'],
  //   descriptionFiles: ['package.json']
  //   enforceExtension: false,
  //   enforceModuleExtension: false
}