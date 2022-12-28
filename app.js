var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeController = require('./routes/Home');
var aboutUsController = require('./routes/About');
var projectController = require('./routes/Project');
var contactUsController = require('./routes/Contact');
var educationsController = require('./routes/Educations');
var experienceController = require('./routes/Experience');
var certificatesController = require('./routes/Certificates');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeController);
app.use('/educations', educationsController);
app.use('/experience', experienceController);
app.use('/certificates', certificatesController);
app.use('/project', projectController);
app.use('/about', aboutUsController);
app.use('/contact', contactUsController);




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
  res.render('error');
});

module.exports = app;
