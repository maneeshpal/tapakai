
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');

module.exports = {
    entry: { 
        demo: './src/demo.js',
        demo2: './src/demo2.js'
    },

    output: {
        path: path.join(__dirname, '/public'),
        filename: '[name].js',
        chunkFilename: '[id].js'
    },

    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, './src')
                ],
                query: {
                    presets: ['es2015', 'react']
                }
            }, 
            { 
                test: /.(png|woff(2)?|eot|ttf|svg|jpg)(\?[a-z0-9=\.]+)?$/, 
                loader: 'url-loader?limit=100000'
            }, {
                test: /\.(scss|css)?$/,
                loader: ExtractTextPlugin.extract("css!sass"),
                include: [
                    path.resolve(__dirname, './src')
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
        new ExtractTextPlugin("[name].css")
    ]
};