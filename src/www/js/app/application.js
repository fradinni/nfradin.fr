define([
	'backbone',
	'./views/UsersView',
	'templates/index', 
	'templates/blog', 
	'templates/editor', 
	'templates/admin',
	'templates/admin_users'
], function(Backbone, UsersView, IndexTpl, BlogTpl, EditorTpl, AdminTpl, AdminUsersTpl) {

	var Application = Backbone.Router.extend({

		routes: {
			"admin_users": "admin_users",
			"admin": "admin",
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
				if(!$(event.currentTarget).hasClass('twitter-follow-button') && $(event.currentTarget).attr('data-role') != 'extern') {
					event.preventDefault();
					event.stopPropagation();
					self.navigate($(event.currentTarget).attr('href'),  {trigger:true});
				}

			});
		},

		start: function() {
			var self = this;

			console.log('[Application] Started !');

			var silent = true;
			if(document.location.href.indexOf('admin') != -1) silent = false;
			if(document.location.href.indexOf('blog') != -1) silent = false;

	    	// Start Backbone History
			Backbone.history.start({
				pushState: true,
				hashChange: false,
				silent: silent
			});

			// Init twitter button
			this.initTwitterButton();

			// Show page
			if(silent) $(".page").show();

			// Reload twitter widgets
			twttr.widgets.load();
		},

		initTwitterButton: function() {
			// Init twitter button
			$('.twitter-follow-button').remove();
			$('header').append('<a href="https://twitter.com/fradinni" class="twitter-follow-button" data-show-count="true" data-lang="en" data-size="large">Follow @fradinni</a>');
		},

		initScrollToTopLink: function() {
			var pageHeight = $(window).height();
			var scrollToTopDisplayed = false;
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

		withUser: function(callback) {
			var app = this;
			if(typeof this.user == 'undefined' || !this.user) {
				$.get(ApiURL + '/user', function(data, status) {
					if(status == "success" && data) {
						app.user = data;
						callback(data);
					} else {
						callback(null);
					}
				});
			} else {
				callback(app.user);
			}
		},


		//
		// Routes ------------------------------------------
		//


		/**
		* Website home page
		*/
		index: function(path) {
			console.log("[Router] -> index" + (path ? ': '+path : ''));
			var tpl = IndexTpl();
			$('body').html(tpl);

			this.bindLinks();
			$(".page").fadeIn();
		},


		/**
		* Blog home page
		*/
		blog: function(path) {
			console.log("[Router] -> blog");

			// Function used to generate and display blog page
			var showBlogPage = _.bind(function(user) {
				var tpl = $(BlogTpl({user: user}));			
				$('body').html(tpl);
				this.bindLinks();
				$(".page").fadeIn();
			}, this);

			// Get connected user
			this.withUser(_.bind(function(user) {
				var tpl = $(BlogTpl({user: user}));			
				$('body').html(tpl);
				this.bindLinks();
				$(".page").fadeIn();
			}, this));
		},


		/**
		* Article editor
		*/
		editor: function() {
			console.log("[Router] -> editor");
			var tpl = $(EditorTpl());			
			$('body').html(tpl);
			this.bindLinks();
			$(".page").fadeIn(function() {
				// Init editor
				CKEDITOR.disableAutoInline = true;
	    		CKEDITOR.inline( 'editor' );
			});
		},


		/**
		* Blog admin
		*/
		admin: function() {
			console.log('[Router] -> admin');
			this.withUser(_.bind(function(user) {
				var tpl = $(AdminTpl({user: user}));			
				$('body').html(tpl);
				this.bindLinks();
				$(".page").fadeIn();
			}, this));
		},


		/**
		* Blog users admin
		*/
		admin_users: function() {
			console.log('[Router] -> admin users');
			this.withUser(_.bind(function(user) {
				var tpl = $(AdminUsersTpl({user: user}));			
				$('body').html(tpl);

				var self = this;
				$.get('/api/users').done(function(data) {
					var usersView = new UsersView({
						el: ".users-list",
						collection: new Backbone.Collection(data)
					});
					usersView.render();
					self.bindLinks();
					$(".page").fadeIn();
				});
			}, this));
			
		}

	});
	return Application;
});