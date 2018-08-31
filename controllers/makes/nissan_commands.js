const NissanConnect = require('../../models/nissan_connect_with_logger');
const AbstractCommands = require('./abstract_commands');
const logger = require('../../logger');

class NissanCommands extends AbstractCommands{

	constructor() {
		super();
		this._nc = new NissanConnect();
	}

	async getBatteryStatus() {
		let result = await this._nc.getBatteryStatus();
		let batteryStatus = result.batteryStatus;
		logger.info(`Battery capacity (health) : ${batteryStatus.capacity}/12 (will never go back up...)`);
		logger.info(`Charge state : ${batteryStatus.chargeState}/12`);
		if (batteryStatus.hasTimeToFull6kW) {
			logger.info(`Time to full : ${batteryStatus.timeToFull6kW.toString()}`);
		}
		logger.info(`pluginState : ${batteryStatus.pluginState}`);
		logger.info(`charging : ${batteryStatus.isCharging}`);
		logger.info(`chargeMode : ${batteryStatus.chargeMode}`);
		logger.info(`chargeStatus : ${batteryStatus.chargeStatus}`);
		return batteryStatus;
	}

	async turnOnClimateControl() {
		await this._nc.acOn();
	}

	async turnOffClimateControl() {
		await this._nc.acOff();
	}
}
module.exports = NissanCommands;