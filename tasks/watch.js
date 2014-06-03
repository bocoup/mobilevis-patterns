module.exports = function(grunt) {

  var mobileVisRoot = grunt.option('root');
  if (typeof mobileVisRoot === "undefined") {
    throw new Error("Pass --root path to your mobileVis app");
  }

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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
