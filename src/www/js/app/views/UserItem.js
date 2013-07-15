define([
	'backbone',
	'templates/userItem'
], function(Backbone, UserItemTemplate) {

	/**
	*
	*/
	var UserItem = Backbone.View.extend({

		tagName: 'li',
		className: 'user-item',

		initialize: function(params) {
			this.model = params.model;
			this.template = UserItemTemplate;
		},

		/**
		* Render item
		*/
		render: function() {
			var html = this.template({model: this.model});
			this.$el.html(html);
		}

	});

	return UserItem;

});