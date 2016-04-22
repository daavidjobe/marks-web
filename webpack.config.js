module.exports = {
  entry: './src/client/index.js',
  output: {
    path: './',
    filename: 'dist/bundle.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['react', 'es2015']
          }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  }
};