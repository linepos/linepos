define([
	'backbone',
	'util',
	'views/framework/tableView',
	'text!templates/products/productsList.html',
	'collections/products'
], function(Backbone, util,
	TableView,
	ProductsListTemplate,
	Products) {

	var ProductsTable = TableView.extend({
		collectionClass: Products,
		template: ProductsListTemplate,

		initialize: function() {
			this._super = TableView.prototype;
			this._super.initialize.call(this);

			this._super.renderList.call(this);
		}
	});

	util.extendDefaults(TableView, ProductsTable);

	return ProductsTable;
});