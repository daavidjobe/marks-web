
import path from 'path';
import express from 'express';
let app = express();
const PORT = process.env.PORT || 3000

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);
  
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
}

app.use(express.static('dist'));

app.get('/', (request, response) => {
  console.log('hello from /');
  response.sendFile(__dirname + '/dist/index.html')
});

app.get('*', (request, response) => {
  console.log('hello from *');
  response.sendFile(__dirname + '/dist/index.html')
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> Listening on port %s", PORT);
  }
});