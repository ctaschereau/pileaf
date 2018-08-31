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
}
module.exports = AbstractCommands;