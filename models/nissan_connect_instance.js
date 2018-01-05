const logger = require('../logger');
const NissanConnect = require('@beejjacobs/nissan-connect').NissanConnect;
let nc = new NissanConnect(process.env.NISSAN_CONNECT_USERNAME, process.env.NISSAN_CONNECT_PASSWORD, NissanConnect.Region[process.env.NISSAN_CONNECT_REGION]);
nc.logger.log = (...args) => {
	logger.info(...args);
};
nc.api.logger.log = (...args) => {
	logger.info(...args);
};
module.exports = nc;
