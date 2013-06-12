requirejs.config({
	paths: {
		'jquery': 'vendor/jquery/jquery',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone',
		'form2js': 'vendor/form2js/src/form2js',
		'text': 'vendor/requirejs-text/text',
		'templates': '../templates'
	}
});

requirejs([
	'app'
], function(AppView) {
	new AppView();
});
