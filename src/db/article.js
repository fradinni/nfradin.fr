if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.Types.ObjectId,
		User = require('./user');

	/**
	* DB User Model
	*/
	var Article = new Schema({
		author: ObjectId,
		title: String,
		text: String,
		cover: String,
		dateCreated: {type: Date, default: Date.now},
		lastUpdated: {type: Date, default: Date.now}
	});

	return Article;
	
});