const log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = 'debug';
//////https://github.com/socketio/socket.io/issues/800
module.exports = logger;
