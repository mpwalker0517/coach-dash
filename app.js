var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var wns = require('./logs/logsetup.js'); //Usually called logger, but in this file its not because of the premade morgan logger setup.
var cors = require('cors');

const morganMiddleware = logger(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      // Configure Morgan to use our custom logger with the http severity
      write: (message) => wns.trace(message.trim(),'Morgan Stream')
    },
  }
);

var app = express();

app.use(cors({origin: ['http://localhost:3000','http://localhost:3001','http://localhost:3002','http://localhost:3003','http://localhost:3004','http://10.1.5.220:3180']}));
app.use(morganMiddleware);


var exampleRouter = require('./routes/example.js');
var apiRouter = require('./routes/api.js');
var indexRouter = require('./routes/index')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/example',exampleRouter);
app.use('/api',apiRouter);
//app.use('/users', usersRouter); Generator Route Will Remove

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
