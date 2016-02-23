
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    entry: { 
        demo: './src/demo.js',
        demo2: './src/demo2.js'
    },

    output: {
        path: __dirname + '/public/js',
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
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react'],
                }
            }, 
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader!sass-loader"),
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