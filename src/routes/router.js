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
		Models = require('../db/models')(mongoose),
		User = Models.User,
		Article = Models.Article;


	//
	// Main Routes ----------------------------------------------------
	//


	/**
	* Index route
	*/
	var index = function(req, res) {
		res.render('index.ejs');
	};

	/**
	* Blog route
	*/
	var blog = function(req, res) {
		res.render('blog.ejs', {user: req.user});
	}


	/**
	* Article editor route
	*/
	var editor = function(req, res) {

		var articleId = req.param('a');		
		if(articleId == 'new') {
			return res.render('editor.ejs', {article: new Article({text: "<h1>New article</h1><p>Some content</p>"})});
		} else {
			try {
				new ObjectId(articleId);
			} catch(e) {
				res.send(500, e);
			}
			Article.findById(articleId, function(err, article) {
				if(err || !article) {
					return res.send(500, {error: 'Unable to find article with id: ' + articleId});
				} else {
					return res.send('editor.ejs', {article: article});
				}
			});
		}
	}


	/**
	* Display blog administration page
	*/
	var admin = function(req, res) {
		res.render('admin.ejs', {user: req.user});
	}


	/**
	* Manage blog users
	*/
	var adminUsers = function(req, res) {

		// Retrieve blog users
		User.find().sort('username').exec(function(err, users) {
			if(err) {
				res.send(500, err);
			} else{
				res.render('admin_users.ejs', {user: req.user, users: users});
			} 
		});
	}



	//
	// Authentication Routes --------------------------------------------------
	//


	/**
	* Login route
	*/
	var login = function(req, res) {
		req.logout();
		res.redirect('/auth/google');
	};


	/**
	* Logout route
	*/
	var logout = function(req, res) {
		req.logout();
		res.redirect('/blog');
	};




	//
	// END --------------------------------------------------------------------
	//


	/**
	* Export routes
	*/
	return [
		{ path: '/', method: "GET", fn: index },
		{ path: '/blog', method: "GET", fn: blog },
		{ path: '/admin', method: "GET", fn: admin, auth: true },
		{ path: '/admin_users', method: "GET", fn: adminUsers, auth: true },
		{ path: '/login', method: "GET", fn: login },
		{ path: '/logout', method: "GET", fn: logout },

		{ path: '/editor', method: "GET", fn: editor, auth: true },
	];

});