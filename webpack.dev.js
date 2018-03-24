const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const SRC = path.resolve(__dirname, 'src');

const appConfig = require("./config.json").dev;

module.exports = merge(common, {
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SRC,
        loader : 'preprocess-loader?+DEV'
      }
    ]
  },
  externals: {
    AppConfig: JSON.stringify(appConfig)
  }
});