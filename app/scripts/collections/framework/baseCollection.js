define([
	'backbone',
	'util',
	'storage'
], function(Backbone, util,
	Storage) {

	var Products = Backbone.Collection.extend({
		url: function() {
			return Storage.buildUrl(this.collectionName);
		},

		getList: function() {
			return util.getFlatObject(this.toJSON());
		},

		getHeaders: function() {
			return util.getFlatKeys(this.toJSON());
		},

		populate: function(callback) {
			this.fetch({
				success: $.proxy(function() {
					if(callback) {
						callback();
					}
				}, this)
			});
		}

	});

	return Products;
});