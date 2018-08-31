const AbstractCommands = require('./abstract_commands');

class BMWCommands extends AbstractCommands{

	constructor() {
		super();
	}

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
module.exports = BMWCommands;