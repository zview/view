const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

const webpackBaseConfig = require('./webpack.base.config.js');
const {resolve} = require('path');
const fs = require('fs');
const root_path = './dist';
const public_path = ''; //根据实际情况修改, 即contentpath

// Banner
var pkg = require('./package.json');
var moment = require('moment');
var banner = 'view \nversion: ' + pkg.version + ' \nrepo: https://github.com/zview/view \nbuild: ' + moment().format('YYYY-MM-DD HH:mm:ss')

//
fs.open('./src/config/env.js', 'w', function (err, fd) {
    const buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {
    });
});

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    entry: {
        view: './src/index.js',
    },
    output: {
        path: resolve(__dirname, root_path),
        publicPath: public_path,
        filename: '[name].min.js',
        library: ['View','[name]'],
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        'sass-loader'
                    ]
                }),
            }
        ]
    },
    plugins: [
        // 提取CSS
        new ExtractTextPlugin({
            filename: '[name].min.css',
            allChunks: true
        }),
        // 版权信息
        new webpack.BannerPlugin({
            banner: banner,
            entryOnly: true
        }),
        //
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        //
        new OptimizeCssPlugin(),
        // 压缩
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
    ]
});
