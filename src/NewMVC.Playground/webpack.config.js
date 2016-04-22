var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, ''),
    devtool: 'source-map',
    entry: { main: './source/jsx/main.jsx', derp: './source/jsx/derp.jsx' },
    output: {
        path: path.join(__dirname, 'wwwroot/prod'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json'],
        modulesDirectories: [
          'node_modules',
          path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: path.join(__dirname, '')
            }
        ],
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
                include: path.join(__dirname, '')
            }, {
                test: /(\.scss|\.css)$/,
                loaders: [
                  require.resolve('style-loader'),
                  require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                  require.resolve('sass-loader') + '?sourceMap'
                ]
            }
        ]
    }
    //,
    //plugins: [new ExtractTextPlugin('react-toolbox.css', { allChunks: true })]
}; 