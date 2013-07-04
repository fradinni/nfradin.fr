requirejs.config({
	"baseUrl": "js/lib",
	"paths": {
		"app": "../app",
		"templates": "../../templates"
	},
	"shim": {
		"jquery": {
			exports: "$"
		},
		"backbone": {
			deps: ["underscore", "jquery"],
			exports: 'Backbone'
		},
	}
});

requirejs(["app/main"]);