define([
	'backbone',
	'storage',
	'text!templates/products/productsForm.html',
	'views/products/productsTable',
	'collections/products'
], function(Backbone, Storage,
	ProductsFormTemplate,
	ProductsTableView,
	Products) {

	var ProductsView = Backbone.View.extend({

		renderForm: function() {
			var tmplOut = _.template(ProductsFormTemplate);
			$("#productsFormContainer").html(tmplOut());

			this.$productsForm = $("#productsForm");
			this.$productsForm.delegate("#productsFormSubmit", "click", $.proxy(function(event){
				this.create();
			}, this));
		},

		list: function() {
			var ProductsTable = new ProductsTableView();
		},

		create: function() {
			Storage.create("products", this.$productsForm, $.proxy(function(json){
				this.list();
				this.renderForm();
			}, this));
		}

	});

	return new ProductsView();
});