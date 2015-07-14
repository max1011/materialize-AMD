// cd js
// r.js -o app.build.js 
({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'hammerjs': 'hammer.min',
    'jquery.easing': 'jquery.easing.1.3',
    'velocity': 'velocity.min',
    'picker': 'date_picker/picker',
    'picker.date': 'date_picker/picker.date'
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
    'global': {
      deps: ['jquery']
    },
    'toasts': {
      deps: ['global']
    },
    'collapsible': {
      deps: ['jquery']
    },
    'dropdown': {
      deps: ['jquery']
    },
    'leanModal': {
      deps: ['jquery', 'velocity']
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
      deps: ['jquery', 'global']
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
      deps: ['jquery', 'global']
    },
    'waves': {
      exports: 'Waves'
    },
    'character_counter': {
      deps: ['jquery']
    },
    'velocity': {
      deps: ['jquery']
    }
  },
  preserveLicenseComments: false,
  name: "materialize.amd.js",
  out: "../dist/js/materialize.amd.js"
})