'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

// using webpack-dev-server and middleware in development environment
if (process.env.NODE_ENV !== 'production') {}

app.use(_express2.default.static('dist'));

app.get('/', function (request, response) {
  console.log('hello from /');
  response.sendFile(__dirname + '/dist/index.html');
});

app.get('*', function (request, response) {
  console.log('hello from *');
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> Listening on port %s", PORT);
  }
});