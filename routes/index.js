const express = require('express');
const asyncHandler = require('express-async-handler');
const nissanCommands = require('../controllers/nissan_commands');

const logger = require('../logger');

let router = express.Router();

router.get('/', (req, res, next) => {
	//logger.info('test');
	res.render('index', {});
});

router.get('/batStats', asyncHandler(async (req, res, next) => {
	let result = await nissanCommands.getBatteryStatus();
	res.json(result);
}));

router.post('/ccON', asyncHandler(async (req, res, next) => {
	await nissanCommands.turnOnClimateControl();
	res.json({ success: true });
}));

router.post('/ccOFF', asyncHandler(async (req, res, next) => {
	await nissanCommands.turnOffClimateControl();
	res.json({ success: true });
}));

module.exports = router;
