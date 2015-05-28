// cd js
// r.js -o app.build.js 
({
	deps: ['jquery'],
  	paths: {
    	'jquery': '../bower_components/jquery/dist/jquery',
    	'hammerjs': 'hammer.min',
    	'jquery.easing': 'jquery.easing.1.3',
  	 	'velocity': 'velocity.min',
  	},
  	shim: {
	  	'jquery.easing': {
	  		deps: ['jquery']
	  	},
	  	'animation': {
	  		deps: ['jquery']
	  	},
	  	'jquery.hammer': {
	  		deps: ['jquery', 'hammerjs', 'waves']
	  	},
	  	'collapsible': {
	  		deps: ['jquery']
	  	},
	  	'dropdown': {
	  		deps: ['jquery']
	  	},
	  	'leanModal': {
	  		deps: ['jquery']
	  	},
	  	'materialbox': {
	  		deps: ['jquery']
	  	},
	  	'parallax': {
	  		deps: ['jquery']
	  	},
	  	'tabs': {
	  		deps: ['jquery']
	  	},
	  	'tooltip': {
	  		deps: ['jquery']
	  	},
	  	'sideNav': {
	  		deps: ['jquery']
	  	},
	  	'scrollspy': {
	  		deps: ['jquery']
	  	},
	  	'forms': {
	  		deps: ['jquery']
	  	},
	  	'slider': {
	  		deps: ['jquery']
	  	},
	  	'cards': {
	  		deps: ['jquery']
	  	},
	  	'pushpin': {
	  		deps: ['jquery']
	  	},
	  	'buttons': {
	  		deps: ['jquery']
	  	},
	  	'transitions': {
	  		deps: ['jquery','scrollFire']
	  	},
	  	'scrollFire': {
	  		deps: ['jquery']
	  	},
	  	'waves': {
	  		exports: 'Waves'
	  	}
  	},
    preserveLicenseComments: false,
    name: "materialize.amd.js",
    out: "../dist/js/materialize.amd.js"
})