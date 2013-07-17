if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {

	var test = function(req, res) {
		res.send("It works !");
	};

	return [
		{path: '/test', method: "GET", fn: test}
	];
});