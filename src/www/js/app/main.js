/**
* Bootstrap
*/
define(["backbone", "app/application"], function(Backbone, Application) {
	$(function() {

		// Create app and start it
		 app = new Application();
		app.start();
		
	});
});