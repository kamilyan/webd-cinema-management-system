var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var menuRouter = require('./routes/menu');
var createMovieRouter = require('./routes/movies/createMovie');
var searchMovieRouter = require('./routes/movies/searchMovie');
var searchResultsRouter = require('./routes/movies/searchResults');
var movieDataRouter = require('./routes/movies/movieData');
var usersManagementRouter = require('./routes/users/usersManagement');
var userDataRouter = require('./routes/users/userData');
const isAuthenticated = require('./middlewares/authentication.js')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: true,
  maxAge: Date.now() + (86400 * 1000),
}));

app.use('/login', loginRouter);
app.use(isAuthenticated);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter);
app.use('/movies/createMovie', createMovieRouter);
app.use('/movies/searchMovie', searchMovieRouter);
app.use('/movies/searchResults', searchResultsRouter);
app.use('/movies/movieData', movieDataRouter);
app.use('/users/usersManagement', usersManagementRouter);
app.use('/users/userData', userDataRouter);

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
