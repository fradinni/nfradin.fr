define(['backbone', 'templates/index', 'templates/test'], function(Backbone, IndexTpl, TestTpl) {

	var Application = Backbone.Router.extend({

		routes: {
			"test": "test",
			"": "index"
		},

		start: function() {
			var self = this;
			console.log('[Application] Started !');

			// Bind click event on links to handle pushstate
	    	$('body').click('a', function(event) {
				event.preventDefault();
				event.stopPropagation();
				self.navigate($(event.target).attr('href'),  {trigger:true})
			});

	    	// Start Backbone History
			Backbone.history.start({
				pushState: true,
				hashChange: false,
				silent: true
			});
		},


		//
		// Routes ------------------------------------------
		//

		index: function(path) {
			console.log("[Router] -> index" + (path ? ': '+path : ''));
			var tpl = IndexTpl();
			$('body').html(tpl);
		},

		test: function(path) {
			console.log("[Router] -> test");
			var tpl = TestTpl({name: "Nicolas"});
			$('body').html(tpl);
		}

	});
	return Application;
});