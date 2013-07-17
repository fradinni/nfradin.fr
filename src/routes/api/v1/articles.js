if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	//
	// Import dependencies
	//
	var _ = require('underscore'),
		mongoose = require('mongoose'),		
		ObjectId = mongoose.Schema.Types.ObjectId,
		Models = require('../../../db/models')(mongoose),
		User = Models.User,
		Article = Models.Article;


	var addArticle = function(req, res) {

		var title = req.param('title'),
			text = req.param('text'),
			category = req.param('category'),
			author = req.user.id;

		var article = new Article({
			author: author,
			category: category,
			title: title,
			text: text
		});

		article.save(function(err) {
			if(err) {
				return res.send(500, {error: 'Unable to save article: ' + err.err});
			} else {
				return res.send(200, article);
			}
		});
	};



	/**
	* Retrieve articles
	*/ 
	var articles = function(req, res) {

		// Initiliaze query vars
		var nbArticlePerPage = req.param('nbArticlePerPage') || -1,
			page = req.param('page') || 0,
			category = req.param('category') || null;	

		// Build db query
		var query = Article.find({}).sort('-dateCreated');

		// If category is specified, filter results
		if(category) {
			query.where('category').equals(category);
		}

		// If current page is not first page, skip previous articles
		if(page > 1) {
			query.skip(page*nbArticlePerPage)
		}

		// Limit number of result to 1 page.
		if(nbArticlePerPage > 0) {
			query.limit(nbArticlePerPage);
		}

		// Execute query
		query.exec(function(err, articles) {
			if(err || !articles) {
				res.send(500, err ? err : new Error('Unable to retrieve articles !'));
			} else {
				res.send(articles);
			}
		});
	};


	/**
	* Retrieve an article
	*/
	var article = function(req, res) {
		var articleId = req.param('id');

		try {
			new ObjectId(articleId);
		} catch(e) {
			res.send(500, e);
		}
		Article.findById(articleId, function(err, article) {
			if(err || !article) {
				return res.send(500, {error: 'Unable to find article with id: ' + articleId});
			} else {
				return res.send('article.ejs', {article: article});
			}
		});
	}


	/**
	* Export routes
	*/
	return [
		{ path: '/articles', method: "GET", fn: articles },
		{ path: '/articles/:id', method: "GET", fn: article },
		{ path: '/articles', method: "POST", fn: addArticle, auth: true }
	];

});