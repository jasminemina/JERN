var express = require('express');
var bodyParser = require('body-parser');
var Promise = require('bluebird');

var app = express();

app.get('/', function(req, res) {
  res.send('testing asdf');
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('Server is listening on ' + port);
});
