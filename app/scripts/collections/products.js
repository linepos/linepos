define([
	'backbone',
	'models/product'
], function(Backbone,
	Product) {

	var Products = Backbone.Collection.extend({
		model: Product,
		getList: function(){
			var arr = this.toJSON();
			return arr;
		}
	});

	return Products;
});