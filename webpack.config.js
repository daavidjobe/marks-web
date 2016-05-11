
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
   './src/client/index.js' 
  ],
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  devServer: {
    port: 3333,
    contentBase: './dist',
    inline: true,
    historyApiFallback: true,
    proxy: [
      {
        path: '/api*',
        target: 'http://localhost:4567',
        secure: false
      },
      {
        path: '/scraper*',
        target: 'http://localhost:8181',
        secure: false
      }
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!postcss!less?sourceMap"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
      { 
        test: /\.jpe?g$|\.gif$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file"
      }
    ]
  },
  plugins: [],
  postcss: function () {
    return [precss, autoprefixer];
  }
};