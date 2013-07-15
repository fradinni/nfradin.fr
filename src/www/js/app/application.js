define(['backbone', 'templates/index', 'templates/blog'], function(Backbone, IndexTpl, BlogTpl) {

	var Application = Backbone.Router.extend({

		routes: {
			"blog": "blog",
			"": "index"
		},

		initialize: function() {
			this.bindLinks();
			this.initScrollToTopLink();
		},

		bindLinks: function() {
			var self = this;
			// Bind click event on links to handle pushstate
	    	$('a').click(function(event) {
				if(!$(event.currentTarget).hasClass('twitter-follow-button') && $(event.currentTarget).attr('link-role') != 'extern') {
					event.preventDefault();
					event.stopPropagation();
					self.navigate($(event.currentTarget).attr('href'),  {trigger:true});
				}

			});
		},

		start: function() {
			var self = this;
			console.log('[Application] Started !');

	    	// Start Backbone History
			Backbone.history.start({
				pushState: true,
				hashChange: false,
				silent: true
			});

			// Init twitter button
			$('.twitter-follow-button').remove();
			$('header').append('<a href="https://twitter.com/fradinni" class="twitter-follow-button" data-show-count="true" data-lang="en" data-size="large">Follow @fradinni</a>');

			$(".page").show();
			twttr.widgets.load();
		},

		initScrollToTopLink: function() {
			var pageHeight = $(window).height();
			var scrollToTopDisplayed = false;
			console.log('Init scroll: ' + pageHeight);
			$(document).scroll(function() {
				if(!scrollToTopDisplayed && $('body').scrollTop() >= (pageHeight - pageHeight/3) ) {
					$('.scrollToTop').fadeIn(500);
					scrollToTopDisplayed = true;
				} else if(scrollToTopDisplayed && $('body').scrollTop() < (pageHeight - pageHeight/3)){
					$('.scrollToTop').fadeOut(500);
					scrollToTopDisplayed = false;
				}
			});
			$(document).click(function(e) {
				if($(e.target).hasClass('scrollToTop')) $('body').scrollTop(0);
			});
		},


		//
		// Routes ------------------------------------------
		//

		index: function(path) {
			console.log("[Router] -> index" + (path ? ': '+path : ''));
			var tpl = IndexTpl();
			$('body').html(tpl);

			this.bindLinks();
			$(".page").fadeIn();
		},

		blog: function(path) {
			console.log("[Router] -> blog");
			var tpl = $(BlogTpl());			
			$('body').html(tpl);
			this.bindLinks();
			$(".page").fadeIn();
		}

	});
	return Application;
});