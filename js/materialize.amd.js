require.config({
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
  }
});

require([
	'jquery.easing',
	'animation',
	'velocity',
	'hammerjs',
	'jquery.hammer',
	'collapsible',
	'dropdown',
	'leanModal',
	'materialbox',
	'parallax',
	'tabs',
	'tooltip',
	'waves',
	'toasts',
	'sideNav',
	'scrollspy',
	'forms',
	'slider',
	'cards',
	'pushpin',
	'buttons',
	'scrollFire',
	'transitions',
	'date_picker/picker',
	'date_picker/picker.date'
]);

/*
'jquery.easing',
'animation',
'velocity',
'hammerjs',
'jquery.hammer',
'collapsible',
'dropdown',
'leanModal',
'materialbox',
'parallax',
'tabs',
'tooltip',
'waves',
'toasts',
'sideNav',
'scrollspy',
'forms',
'slider',
'cards',
'pushpin',
'buttons',
'scrollFire',
'transitions',
'date_picker/picker',
'date_picker/picker.date'
*/