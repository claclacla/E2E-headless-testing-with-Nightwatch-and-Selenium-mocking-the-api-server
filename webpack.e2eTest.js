const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const SRC = path.resolve(__dirname, 'src');

const appConfig = require("./config.json").e2eTest;
const E2eTestData = require(appConfig.data.filename);

module.exports = merge(common, {
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SRC,
        loader : 'preprocess-loader?+E2ETEST'
      }
    ]
  },
  externals: {
    E2eTestData: JSON.stringify(E2eTestData)
  }
});