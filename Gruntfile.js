module.exports = function(grunt) {

  var mobileVisRoot = grunt.option('root');
  if (typeof mobileVisRoot === "undefined") {
    throw new Error("Pass --root path to your mobileVis app");
  }

  // Project configuration.

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  // Load Grunt plugins.
  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['simplemocha']);

  grunt.registerTask('dev',
    'Start a live-reloading dev webserver on localhost.',
    ['jshint','stylus', 'copy', 'jst', 'watch']);

  grunt.registerTask('build',
    'Builds production stuff',
    ['jshint', 'stylus', 'copy', 'jst', 'requirejs', 'middleman:build']
  );

  grunt.registerTask('default', ['dev']);
};