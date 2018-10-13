const express 		= require('express');
const app			= express();

const recordsController = require('./controllers/records');

/*---------------------------------------
			   MiddleWare
---------------------------------------*/

//should be last - note to self
app.use('/records', recordsController);
/*---------------------------------------
				Listener
---------------------------------------*/
const port = 3000;
app.listen(port, () => {
	console.log('listening on ' + port);
});

//test route
app.get('/', (req, res) => {
	res.send('welcome to my app')
})