if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	return function(mongoose) {

		var user = require('./user'),
			category = require('./category'),
			article = require('./article');

		return {
			User: mongoose.model('User', user),
			Category: mongoose.model('Category', category),
			Article: mongoose.model('Article', article)
		}
	}
	
});