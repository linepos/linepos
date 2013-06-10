define([
	'backbone',
	'text!templates/products/list.html',
	'collections/products',
	'storage'
], function(Backbone,
	ProductListTemplate,
	Products,
	Storage) {

	var ProductsView = Backbone.View.extend({
		renderForm: function() {
			console.log("patron");
		},
		list: function() {
			var tmplOut = _.template(ProductListTemplate);
			$("#products").html(tmplOut());

			Storage.list("products", $.proxy(function(json) {
				console.log(json);
			}, this));

			//var ProductsCollection = new Products();
		},
		create: function() {
			$.ajax({
				url: Mongolab.url("products"),
				data: JSON.stringify({
					"x" : 1
				}),
				type: "POST",
				contentType: "application/json"
			});
		}
	});

	return new ProductsView();
});