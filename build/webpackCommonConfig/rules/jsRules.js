const path = require('path');
const { resolve }  = require('../../untils');

module.exports = [
    {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
            loader: 'awesome-typescript-loader',
            options: {
                transpileOnly: true,  
                useCache: true,
                cacheDirectory: resolve('.cache-loader'),
                useBabel: true,
                babelCore: "@babel/core",
                babelOptions: {
                    // 不需要babelrc文件
                    babelrc: false,
                    presets: [
                        ["@babel/preset-env"],
                        '@babel/preset-typescript',
                        '@babel/preset-react'
                    ],
                    plugins: [
                       ['import', {
                           libraryName: 'antd',
                           libraryDirectory: 'lib',
                           style: true
                       }],
                       ['@babel/plugin-proposal-decorators', {
                           legacy: true
                       }],
                       ['@babel/plugin-proposal-class-properties', {
                           loose: true
                       }],
                       '@babel/plugin-syntax-dynamic-import',
                       'react-hot-loader/babel'               
                    ]
                }
            }
        }]
    }

]