if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	var mongoose = require('mongoose');

	/**
	* DB User Model
	*/
	var User = new mongoose.Schema({
		username: String,
		firstname: String,
		lastname: String,
		email: String,
		password: String,

		activated: {type: Boolean, defaults: false},
		locked: {type: Boolean, default: false},
		removed: {type: Boolean, default: false},

		dateCreated: {type: Date, default: Date.now},
		lastUpdated: {type: Date, default: Date.now},
		lastLogin: Date
	});

	return User;
	
});