if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

	/**
	* DB User Model
	*/
	var Category = new Schema({
		name: { type:String, required: true, unique: true },
		description: String
	});

	return Category;
	
});