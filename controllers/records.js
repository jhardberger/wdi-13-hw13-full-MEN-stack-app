const express = require('express');
const router = express.Router();

const Records = require('../models/records');

/*---------------------------------------
			Restful Routes
---------------------------------------*/

//index route TK - test for now
router.get('/', (req, res) => {
	Records.find({}, (err, allRecords) => {
		if(err){
			console.log(err);
		}else{
			console.log(allRecords)
			res.render('index.ejs', {records: allRecords})
		}
	})
});

//new route
router.get('/new', (req, res) => {
	res.render('new.ejs')
});

//new post route
router.post('/', (req, res) => {
	console.log(req.body);

	if(req.body.firstEdition === 'on'){
		req.body.firstEdition = true;
	}else{
		req.body.firstEdition = false;
	}
	
	Records.create(req.body, (err, createdRecord) => {
		if(err){
			console.log(err);
		}else{
			console.log(createdRecord);
			res.redirect('/records')
		}
	})

})













//the end
module.exports = router;