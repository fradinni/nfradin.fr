define([
	'backbone',
	'templates/userItem'
], function(Backbone, UserItemTemplate) {

	/**
	*
	*/
	var UserItem = Backbone.View.extend({

		tagName: 'tr',
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
			if(this.model.get('roles')[0] == 'ADMIN') {
				this.$el.attr('style', 'color: #df4b33');
			}
		}

	});

	return UserItem;

});