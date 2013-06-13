define([
	'backbone',
	'util',
	'collections/framework/baseCollection',
	'models/product'
], function(Backbone, util,
	BaseCollection,
	Product) {

	var Products = BaseCollection.extend({
		model: Product,
		collectionName: "products"
	});

	return Products;
});