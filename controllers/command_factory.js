const BMWCommands = require('./makes/bmw_commands');
const NissanCommands = require('./makes/nissan_commands');
const TeslaCommands = require('./makes/tesla_commands');

class CommandFactory {

	static getCommander() {
		switch (process.env.CAR_MAKE) {
			case 'BMW':
				return new BMWCommands();
			case 'Nissan':
				return new NissanCommands();
			case 'Tesla':
				return new TeslaCommands();
			default:
				throw new Error('Car make not supported or empty');
		}
	}

}
module.exports = CommandFactory;