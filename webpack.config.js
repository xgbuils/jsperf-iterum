var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './index.js'],
    output: {
        path: './',
        filename: 'cdn.js',
        library: 'jsperf',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
 }