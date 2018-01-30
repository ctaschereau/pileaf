const log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = 'debug';
log4js.configure({
	appenders : {
		file : {
			type : 'file',
			filename :
				'./logs/pileaf.log'
		}, console : {
			type : 'stdout'
		}
	},
	categories : {
		default : {
			appenders : ['file', 'console'],
			level : 'debug'
		}
	}
});
//////https://github.com/socketio/socket.io/issues/800
module.exports = logger;
