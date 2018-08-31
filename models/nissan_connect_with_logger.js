const NissanLogger = require('./nissan_logger');
const NissanConnect = require('@beejjacobs/nissan-connect').NissanConnect;

class NissanConnectWithLogger extends NissanConnect {

	constructor() {
		super(process.env.API_USERNAME, process.env.API_PASSWORD, NissanConnect.Region[process.env.API_REGION]);
		this.logger = new NissanLogger('NissanConnect');
		this.api.logger = new NissanLogger('NissanConnectApi');
	}

}
module.exports = NissanConnectWithLogger;
