require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json({extended:false}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

mongoose
  .connect(
     process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true},
  )
  .then(() => {
    console.log('DB CONNECTED');
  })
  .catch(console.log('DB NOT CONNECTED'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({'error':err});
});

module.exports = app;
