var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === "build";

console.log("Prod: ", isProd);

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
  }, {
    // ASSET LOADER
    // Reference: https://github.com/webpack/file-loader
    // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
    // Rename the file using the asset hash
    // Pass along the updated reference to your code
    // You can add here any file extension you want to get copied to your output
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
    loader: 'file',
  }
];


var plugins = [];

if (isProd) {
  // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  // Minify all javascript, switch loaders to minimizing mode
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: ['$super', '$', 'exports', 'require'],
    },
  }));
}

plugins.push(
  new HtmlWebpackPlugin({
    template: path.resolve('src', 'index.html'),
    inject: 'body'
  })
);

module.exports = {
  devtool: isProd ? 'source-map' : 'nosources-source-map',
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  plugins: plugins,
  module: {
    loaders: loaders
  }
};
