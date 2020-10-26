var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var PORT = process.env.PORT || 4000
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'personalwebsite', 'build')));


app.use('*', (req, res) => {
  res.render(path.join(__dirname+"/personalwebsite/build/index.html"))
});

app.listen(PORT)

module.exports = app;
