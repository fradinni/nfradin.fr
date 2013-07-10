if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	//
	// Main Routes ----------------------------------------------------
	//


	/**
	* Index route
	*/
	var index = function(req, res) {
		res.render('index.ejs');
	};

	var test = function(req, res) {
		res.render('test.ejs');
	}





	//
	// Authentication Routes ----------------------------------------------------
	//


	/**
	* Login route
	*/
	var login = function(req, res) {

	};


	/**
	* Logout route
	*/
	var logout = function(req, res) {

	};


	/**
	* Register route
	*/
	var register = function(req, res) {

	};





	//
	// END ----------------------------------------------------------------------
	//


	/**
	* Export routes
	*/
	return [
		{ path: '/', method: "GET", fn: index },
		{ path: '/test', method: "GET", fn: test }
	];

});