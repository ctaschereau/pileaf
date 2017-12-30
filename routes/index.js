const express = require('express');
const NissanConnect = require('nissan-connect');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
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

	res.render('index', { title: 'Pi Leaf' });
});

module.exports = router;
