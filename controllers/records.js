const express = require('express');
const router = express.Router();

const Records = require('../models/records');

/*---------------------------------------
			Restful Routes
---------------------------------------*/

//index route TK - test for now
router.get('/', (req, res) => {
	res.send('this is where my records will go')
});

//new route
router.get('/new', (req, res) => {
	res.render('new.ejs')
});













//the end
module.exports = router;