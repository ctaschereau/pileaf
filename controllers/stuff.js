class Stuff {
	static async doStuff() {
		const NissanConnect = require('nissan-connect');
		let nc = new NissanConnect(process.env.NISSAN_CONNECT_USERNAME, process.env.NISSAN_CONNECT_PASSWORD, NissanConnect.Region[process.env.NISSAN_CONNECT_REGION]);

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
module.exports = Stuff;