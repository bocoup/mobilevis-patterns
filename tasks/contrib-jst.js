module.exports = function(grunt) {

  var mobileVisRoot = grunt.option('root');
  if (typeof mobileVisRoot === "undefined") {
    throw new Error("Pass --root path to your mobileVis app");
  }

  grunt.config.set('jst', {
    templates: {
      options: {
        processName: function(filename) {
          var parts = filename.split("/");
          filename = parts[parts.length - 1];
          return filename.split(".")[0];
        }
      },
      src: ['source/templates/*.html'],
      dest: 'source/js/templates.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jst');
};
