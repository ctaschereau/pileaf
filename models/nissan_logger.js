const logger = require('../logger');

class Logger {
	constructor(prefix) {
		this.name = prefix;
	}

	log(...args) {
		logger.info(`${this.prefix} ${[...args].join(' ')}`);
	}

	get prefix() {
		return `[${this.name}]`;
	}

	static get time() {
		return new Date().toISOString().replace('T', ' ').replace('Z', '');
	}
}

module.exports = Logger;
