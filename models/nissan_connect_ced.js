const NissanLogger = require('./nissan_logger');
const NissanConnect = require('@beejjacobs/nissan-connect').NissanConnect;

class NissanConnectCed extends NissanConnect {

	constructor() {
		super(process.env.NISSAN_CONNECT_USERNAME, process.env.NISSAN_CONNECT_PASSWORD, NissanConnect.Region[process.env.NISSAN_CONNECT_REGION]);
		this.logger = new NissanLogger('NissanConnect');
		this.api.logger = new NissanLogger('NissanConnectApi');
	}

}
module.exports = NissanConnectCed;
