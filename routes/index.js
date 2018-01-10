const express = require('express');

let router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index', {
		title : 'Pi Leaf',
		description : `🔌🔋🚗`
	});
});

router.get('/batStats', (req, res, next) => {
	res.json({ a: 1 });
});

module.exports = router;
