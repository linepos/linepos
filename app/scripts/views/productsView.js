define([
	'backbone',
	'text!templates/products/productsList.html',
	'text!templates/products/productsForm.html',
	'collections/products',
	'storage'
], function(Backbone,
	ProductsListTemplate,
	ProductsFormTemplate,
	Products,
	Storage) {

	var ProductsView = Backbone.View.extend({
		renderForm: function() {
			var tmplOut = _.template(ProductsFormTemplate);
			$("#productsFormContainer").html(tmplOut());

			this.$productsForm = $("#productsForm");
			this.$productsForm.delegate("#productsFormSubmit", "click", $.proxy(function(event){
				this.create();
				event.preventDefault();
				return false;
			}, this));
		},
		list: function() {
			var tmplOut = _.template(ProductsListTemplate);

			Storage.list("products", $.proxy(function(json) {
				var ProductsCollection = new Products(json);

				$("#productsList").html(tmplOut({
					list: ProductsCollection.getList()
				}));
			}, this));
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