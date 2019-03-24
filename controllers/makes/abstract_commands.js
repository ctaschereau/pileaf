class AbstractCommands {
	async getBatteryStatus() {
		throw new Error('Unimplemented!');
	}

	async turnOnClimateControl() {
		throw new Error('Unimplemented!');
	}

	async turnOffClimateControl() {
		throw new Error('Unimplemented!');
	}

	async setAcSchedule(dateTime) {
		throw new Error('Unimplemented!');
	}

	async startCharging() {
		throw new Error('Unimplemented!');
	}
}
module.exports = AbstractCommands;