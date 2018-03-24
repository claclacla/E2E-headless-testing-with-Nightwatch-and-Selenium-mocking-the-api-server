const webpack = require('webpack');
const path = require('path');

const SRC = path.resolve(__dirname, 'src');
const ASSETS = path.resolve(__dirname, 'assets');
const PUBLIC = path.resolve(__dirname, 'public/js');

var config = {
  entry: SRC + '/index.js',
  output: {
    path: PUBLIC,
    filename: 'app.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SRC,
        loader : 'babel-loader',
        query: {
          plugins: ["babel-plugin-transform-object-rest-spread"]
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@App": SRC,
      "@Assets": ASSETS
    }
  }
};

module.exports = config;