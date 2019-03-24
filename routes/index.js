const express = require('express');
const asyncHandler = require('express-async-handler');
const CommandFactory = require('../controllers/command_factory');

const logger = require('../logger');

let commander = CommandFactory.getCommander();

let router = express.Router();

router.get('/', (req, res, next) => {
	//logger.info('test');
	res.render('index', {});
});

router.get('/batStats', asyncHandler(async (req, res, next) => {
	try {
		let result = await commander.getBatteryStatus();
		res.json(result);
	} catch (err) {
		logger.error(err);
		res.end(500);
	}
}));

router.post('/ccON', asyncHandler(async (req, res, next) => {
	await commander.turnOnClimateControl();
	res.json({ success: true });
}));

router.post('/ccOFF', asyncHandler(async (req, res, next) => {
	await commander.turnOffClimateControl();
	res.json({ success: true });
}));

router.post('/ccScheduledStart', asyncHandler(async (req, res, next) => {
	// TODO : Sanitize inputs!
	await commander.setAcSchedule(req.body.datetime);
	res.json({ success: true });
}));

router.post('/setChargingON', asyncHandler(async (req, res, next) => {
	await commander.startCharging();
	res.json({ success: true });
}));

module.exports = router;
