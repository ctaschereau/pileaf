process.on('uncaughtException', (err) => {
	console.error(`uncaughtException : ${err.stack}`);
	process.exit(1);
});
process.on('unhandledRejection', (err) => {
	console.error(`unhandledRejection : ${err.stack}`);
	process.exit(1);
});

require('dotenv').config();

const logger = require('../logger');
const CommandFactory = require('../controllers/command_factory');

let commander = CommandFactory.getCommander();

let command = process.argv[2].replace('command=', '');

switch (command) {
	case 'bat':
		commander.getBatteryStatus().catch(logger.error);
		break;
	case 'cc':
		commander.turnOnClimateControl().catch(logger.error);
		break;
	default:
		logger.warn(JSON.stringify(process.argv));
}


