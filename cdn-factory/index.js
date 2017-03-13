const webpack = require("webpack");

module.exports = function(library) {
    const config = {
        entry: ['./index.js'],
        output: {
            path: './',
            filename: 'cdn.js',
            library: library,
            libraryTarget: 'umd'
        },
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false }
            })
        ]
    }

    webpack(config, function(err, stats) {
        console.log(stats.toString({
            colors: true
        }))
    });
}
