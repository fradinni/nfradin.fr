requirejs.config({
	"baseUrl": "js/lib",
	"paths": {
		"requireLib": "require",
		"app": "../app",
		"templates": "../../templates_compiled"
	},
	"shim": {
		"underscore": {
			exports: "_"
		},
		"jquery": {
			exports: "$"
		},
		"ejs": {
			exports: "ejs"
		},
		"backbone": {
			deps: ["underscore", "jquery", "ejs"],
			exports: 'Backbone'
		},
	}
});

ApiURL = "http://localhost:8080/api";
requirejs(["app/main"]);