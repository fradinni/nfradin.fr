define([
	'backbone',
	'./UserItem'
], function(Backbone, UserItem) {

	/**
	* Users list view
	*/
	var UsersView = Backbone.View.extend({

		/**
		* Render list items
		*/
		render: function() {
			
			// Clear html
			this.$el.html('');

			// Render each model
			var self = this;
			_.each(this.collection.models, function(model) {
				var userItem = new UserItem({ model: model });
				userItem.render();
				self.$el.append(userItem.$el);
			});
		}

	});

	return UsersView;

});