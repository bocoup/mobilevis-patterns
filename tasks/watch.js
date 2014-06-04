module.exports = function(grunt) {

  var mobileVisRoot = grunt.option('root');

  grunt.config.set('watch', {

    assets: {
      files : [mobileVisRoot + "/src/assets/**/*.{png,jpeg,jpg,gif,svg}"],
      tasks : ['copy']
    },

    templates: {
      files: ['source/templates/*.html'],
      tasks: ['jst']
    },

    deps: {
      files : ['source/bower_components/**/*'],
      tasks : ['uglify:deps']
    },

    js: {
      files : ['source/js/main.js'],
      tasks : ['jshint', 'requirejs']
    },

    stylus: {
      files: [mobileVisRoot + "src/**/*.styl"],
      tasks : ['stylus']
    },

    rebuild: {
      files: ["source/patterns/*.erb", "source/css/patterns.css", "source/layouts/*.erb"],
      tasks: ["middleman:build"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
