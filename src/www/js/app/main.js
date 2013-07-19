/**
* Bootstrap
*/
define(["backbone", "app/application"], function(Backbone, Application) {
	$(function() {

		// Create app and start it
		var app = new Application();
		app.start();
		
	});
});