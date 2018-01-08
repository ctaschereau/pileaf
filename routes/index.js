const express = require('express');

let router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', {
		title : 'Pi Leaf',
		description : `🔌🔋🚗`
	});
});

module.exports = router;
