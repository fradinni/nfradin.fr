if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	return function(mongoose) {

		var user = require('./user');
		var article = require('./article');

		return {
			User: mongoose.model('User', user),
			Article: mongoose.model('Article', article)
		}
	}
	
});