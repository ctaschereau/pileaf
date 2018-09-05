const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');

process.on('uncaughtException', (err) => {
	console.error(`uncaughtException : ${err.stack}`);
	process.exit(1);
});
process.on('unhandledRejection', (err) => {
	console.error(`unhandledRejection : ${err.stack}`);
	process.exit(1);
});

require('dotenv').config();

const index = require('./routes/index');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
	src: path.join(__dirname, 'public'),
	dest: path.join(__dirname, 'public'),
	indentedSyntax: true, // true = .sass and false = .scss
	sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
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

app.setupSocketIO = function(httpServer) {
	const logger = require('./logger');
	require('winston-socket.io');

	const winston = require('winston');
	logger.add(new winston.transports.SocketIO({
		port: process.env.PORT,
		secure: false,
		reconnect: true
	}));

	let io = require('socket.io')(httpServer);
	io.on('connection', function(socket){
		logger.info(`a user connected`);

		socket.on('log', (msg) => {
			io.emit('log', msg);
		});

		socket.on('disconnect', function(){
			logger.info('user disconnected');
		});
	});
};

module.exports = app;
