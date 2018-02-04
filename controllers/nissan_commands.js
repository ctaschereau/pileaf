const NissanConnect = require('../models/nissan_connect_ced');
const logger = require('../logger');

class NissanCommands {
	static async getBatteryStatus() {
		let nc = new NissanConnect();

		try {
			let result = await nc.getBatteryStatus();
			let batteryStatus = result.batteryStatus;
			logger.info(`Charge state : ${batteryStatus.chargeState}/12`);
			if (batteryStatus.hasTimeToFull6kW) {
				logger.info(`Time to full : ${batteryStatus.timeToFull6kW.toString()}`);
			}
			logger.info(`pluginState : ${batteryStatus.pluginState}`);
			logger.info(`charging : ${batteryStatus.charging}`);
			logger.info(`chargeMode : ${batteryStatus.chargeMode}`);
			logger.info(`chargeStatus : ${batteryStatus.chargeStatus}`);
			return batteryStatus;
		} catch (err) {
			logger.error(err);
			return null;
		}
	}

	static async turnOnClimateControl() {
		let nc = new NissanConnect();

		try {
			await nc.acOn();
			logger.info('ac is on');
		} catch (err) {
			logger.error(err);
		}
	}

	static async turnOffClimateControl() {
		let nc = new NissanConnect();

		try {
			await nc.acOff();
			logger.info('ac is on');
		} catch (err) {
			logger.error(err);
		}
	}
}
module.exports = NissanCommands;