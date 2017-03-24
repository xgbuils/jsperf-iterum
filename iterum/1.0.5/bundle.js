const webpack = require('webpack')
const version = '1.0.5'
const underscoreVersion = version.split('.').join('_')

const config = {
    entry: ['./index.js'],
    output: {
        path: __dirname,
        filename: 'cdn.js',
        library: 'Iterum' + '_' + underscoreVersion,
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
