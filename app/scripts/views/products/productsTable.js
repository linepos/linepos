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
		el: $("#productsList"),

		initialize: function() {
			this._super = TableView.prototype;
			this._super.initialize.call(this);

			this.render();
		},

		render: function() {
			this._super.renderList.call(this);
		}

	});

	return ProductsTable;
});