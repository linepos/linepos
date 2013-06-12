define([
	'backbone',
	'util',
	'storage',
	'models/product'
], function(Backbone, util,
	Storage,
	Product) {

	var Products = Backbone.Collection.extend({
		model: Product,
		collectionName: "products",
		url: Storage.buildUrl("products"),
		getList: function(){
			return util.getFlatObject(this.toJSON());
		},
		getHeaders: function(){
			return util.getFlatKeys(this.toJSON());
		},
		populate: function() {
			this.fetch();
			console.log(this);
			console.log(this.toJSON());
		}
	});

	return Products;
});