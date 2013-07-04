if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	var index = function(req, res) {
		res.render('layout.ejs', {title: "nfradin.fr"});
	};

	return [
		{path: '/', method: "GET", fn: index}
	];
    //var dep = require('dependency');

    //The value returned from the function is
    //used as the module export visible to Node.
    //return function () {};
});