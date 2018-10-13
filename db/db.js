const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/records';
mongoose.connect(connectionString, {useNewUrlParser: true});

//logs
mongoose.connection.on('connected', () => {
	console.log('mongoose connected to ' + connectionString);
});

mongoose.connection.on('disconnected', () => {
	console.log('mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
	console.log('----MONGOOSE ERROR----' + err);
})
