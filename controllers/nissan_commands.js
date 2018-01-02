class NissanCommands {
	static async getBatteryStatus() {
		let nc = require('./nissan_connect_instance');

		try {
			let status = await nc.getBatteryStatus();
			console.log(status.batteryStatus.chargeState);
			console.log(status.batteryStatus.timeToFull6kW);

			//AC controls
			//await nc.acOn();
			//console.log('ac is on');
		} catch (err) {
			console.error(err);
		}
	}
}
module.exports = NissanCommands;