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
		Article = Models.Article,
		Crypto = require('crypto');


	/**
	* Retrieve users list
	*/
	var getUsers = function(req, res) {
		User.find().sort('username').exec(function(err, users) {
			if(err) {
				res.send(500, {error: 'Unable to retrieve users !'});
			} else {
				res.send(200, users);
			}
		});
	}


	/**
	* Retrieve specific user
	*/
	var getUser = function(req, res) {
		var userId = req.param('id');
		try {
			new ObjectId(userId);
		} catch(e) {
			res.send(500, e);
		}
		User.findById(userId).exec(function(err, user) {
			if(err) {
				res.send(500, {error: 'Unable to retrieve user wih id: ' + userId});
			} else {
				res.send(200, user);
			}
		})
	}


	/**
	* Create new user
	*/
	var addUser = function(req, res) {

		// Get new user parameters
		var username = req.param('username'),
			password = req.param('password'),
			firstname = req.param('firstname'),
			lastname = req.param('lastname'),
			roles = req.param('roles') || 'USER',
			email = req.param('email');

		// Check parameters
		if(!username || !password || !email) {
			return res.send(500, {error: 'Missing parameter...'});
		}

		// Encode user password
		var passwordHash = Crypto.createHash('sha1');
		passwordHash.update(password);

		// Build new user
		var user = new User({
			username: username,
			email: email,
			password: passwordHash.digest('hex').toString(),
			firstname: firstname,
			lastname: lastname,
			roles: roles.split(','),
			activated: true
		});

		// Try to save user
		user.save(function(err) {
			if(err) {
				res.send(500, {error: 'Unable to save user: ' + err.err});
			} else {
				res.redirect('/admin_users');
			}
		});
	};


	/**
	* Remove an existing user
	*/
	var removeUser = function(req, res) {

	};


	/**
	* Update an existing user
	*/
	var updateUser = function(req, res) {

	}


	/**
	* Export routes
	*/
	return [
		{ path: '/users', method: "GET", fn: getUsers },
		{ path: '/users/:id', method: "GET", fn: getUser },
		{ path: '/users/:id', method: "DELETE", fn: removeUser },
		{ path: '/users/:id', method: "PUT", fn: updateUser },
		{ path: '/users', method: "POST", fn:  addUser }

	];
});