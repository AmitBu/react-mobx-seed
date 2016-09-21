var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel-loader"
  },
  {
    // SASS Loader
    // https://github.com/jtangelder/sass-loader
    test: /\.scss$/,
    loader: "style!css!sass?sourceMap"
  }, {
    // CSS LOADER
    // Reference: https://github.com/webpack/css-loader
    // Allow loading css through js
    test: /\.css$/,
    loader: "style!css"
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      inject: 'body'
    })
  ],
  module: {
    loaders: loaders
  }
};
