define([
	'backbone',
	'storage'
], function(Backbone,
	Storage) {

	var listView = Backbone.View.extend({

		initialize: function(){
			this.templateRendered = _.template(this.template);
			this.collection = new this.collectionClass();
		},

		renderList: function(){
			this.collection.populate($.proxy(this.renderTemplate, this));
		},

		renderTemplate: function() {
			this.$el.html(this.templateRendered({
				headers: this.collection.getHeaders(),
				list: this.collection.getList()
			}));
		}

	});

	return listView;
});