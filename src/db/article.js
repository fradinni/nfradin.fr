if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.Types.ObjectId;

	/**
	* DB User Model
	*/
	var Article = new Schema({

		author: {type: ObjectId, required: true, ref: 'User' },
		category: {type: ObjectId, ref: 'Category', required: true},

		title: {type: String, required: true, unique: true },
		text: {type: String, required: true },
		cover: String,

		dateCreated: {type: Date, default: Date.now},
		lastUpdated: {type: Date, default: Date.now}
	});

	return Article;
	
});