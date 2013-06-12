define([
	'backbone',
	'storage'
], function(Backbone,
	Storage) {

	var listView = Backbone.View.extend({

		initialize: function(){
			this.templateRendered = _.template(this.template);
		},

		renderList: function(){
			this.collection = new this.collectionClass();
			this.collection.populate();

			console.log(this.collection.getList());

			$("#productsList").html(this.templateRendered({
				headers: this.collection.getHeaders(),
				list: this.collection.getList()
			}));
		}

	});

	return listView;
});