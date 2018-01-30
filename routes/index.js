const express = require('express');
const nissanCommands = require('../controllers/nissan_commands');

const logger = require('../logger');

let router = express.Router();

router.get('/', (req, res, next) => {
	//logger.info('test');
	res.render('index', {
		title : 'Pi Leaf',
		description : `🔌🔋🚗`
	});
});

router.get('/batStats', (req, res, next) => {
	nissanCommands.getBatteryStatus().catch(logger.error);
	res.json({ a: 1 });
});

router.get('/ccON', (req, res, next) => {
	nissanCommands.turnOnClimateControl().catch(logger.error);
	res.json({ a: 1 });
});

module.exports = router;
