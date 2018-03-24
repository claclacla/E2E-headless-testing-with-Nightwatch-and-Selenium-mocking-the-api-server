const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const SRC = path.resolve(__dirname, 'src');

const appConfig = require("./config.json").prod;

module.exports = merge(common, {
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SRC,
        loader : 'preprocess-loader?+PROD'
      }
    ]
  },
  externals: {
    AppConfig: JSON.stringify(appConfig)
  }
});