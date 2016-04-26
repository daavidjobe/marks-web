var config = require('./webpack.config.js');
var webpack = require('webpack');

config.devtool = 'source-map';

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    comments: false,
    mangle: true,
    minimize: true
  })
);

config.plugins.push(
    new webpack.optimize.DedupePlugin()
);

config.plugins.push(
    new webpack.optimize.AggressiveMergingPlugin()
);

module.exports = config;