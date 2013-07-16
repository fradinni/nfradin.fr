if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	var _ = require('underscore'),
		mongoose = require('mongoose'),		
		Models = require('../../../db/models')(mongoose),
		Category = Models.Category;

	/**
	* Return categories list
	*/
	var getCategories = function(req, res) {

		Category.find({}).sort('name').exec(function(err, categories) {
			if(err) {
				res.send(500, {error: 'Unable to retrieve categories !'});
			} else {
				res.send(200, categories);
			}
		});
	};


	var addCategory = function(req, res) {
		var name = req.param('name'),
			desc = req.param('description');

		if(!name) {
			return res.send(500, 'Missing parameters...');
		}

		var category = new Category({
			name: name,
			description: desc
		});

		category.save(function(err) {
			if(err) {
				return res.send(500, {error: 'Unable to save category: ' + err.err});
			} else {
				return res.redirect('/admin_categories');
			}
		});
	}

	return [
		{ path: '/categories', method: "GET", fn: getCategories },
		{ path: '/categories', method: "POST", fn: addCategory, auth: true }
	]
});