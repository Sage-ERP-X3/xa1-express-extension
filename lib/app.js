var express = require('express');
var app = exports.app = express();

app.get('/xa1-express-extension/hello', function(req, res) {
	res.send('hello world');
});