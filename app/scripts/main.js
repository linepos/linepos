requirejs.config({
	paths: {
		'jquery': 'vendor/jquery/jquery',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone'
	}
});

requirejs([
	'views/app'
], function(AppView) {
	new AppView();
});
