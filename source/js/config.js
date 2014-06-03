require.config({

  // Make all requires relative to /.
  baseUrl: '../',

  deps: ['js/main'],

  // Map components to nice paths.
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery',
    'lodash': 'bower_components/lodash/dist/lodash.underscore',
    'jquery-cookie': 'bower_components/jquery-cookie/jquery.cookie',
    'modernizr': 'bower_components/modernizr/modernizr',

    // This must work in the browser AND not explode in the r.js build step.
    'livereload': 'http://' + (typeof location !== 'undefined' ?
      location.hostname : 'localhost') + ':35729/livereload.js?snipver=1'
  },

  // Load non-AMD dependencies.
  shim: {

    'jquery-cookie' : {
      deps : ['jquery']
    }
  }

});
