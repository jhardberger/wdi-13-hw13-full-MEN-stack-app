const express 		 = require('express');
const app			 = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//db
require('./db/db');
//controller
const recordsController = require('./controllers/records');

/*---------------------------------------
			   MiddleWare
---------------------------------------*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

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