const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
	title: {type: String, required: true},
	artist: {type: String, required: true},
	year: {type: String, required: true},
	first_edition: Boolean
});

module.exports = mongoose.model('Record', recordSchema);