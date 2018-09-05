const winston = require('winston');
const format = winston.format;
//require('winston-socket.io');

let logFormat = format.combine(
	format.timestamp({ format : 'YYYY-MM-DD HH:mm:ss.SSS' }),
	format.align(),
	format.splat(),
	format.printf(info => `[${info.timestamp}] [${info.level}] - ${info.message}`)
);

const logger = winston.createLogger({
	level: 'debug',
	format : logFormat,
	transports: [
		new winston.transports.File({
			filename: './logs/pileaf.log'
		}),
		new winston.transports.Console({
			format : format.combine(
				format.colorize(),
				logFormat
			)
		})/*,
		new winston.transports.SocketIO()({
			host: "https://myhost",
			port: 2999,
			secure: false,
			reconnect: true
		})*/
	]
});

module.exports = logger;
