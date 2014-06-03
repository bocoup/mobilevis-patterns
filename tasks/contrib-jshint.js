module.exports = function(grunt) {

  grunt.config.set('jshint', {
    build: {
      options: {
        jshintrc: '.jshintrc',
      },
      src: ['Gruntfile.js', 'tasks/**/*.js'],
    },
    app: {
      options: {
        jshintrc: 'source/js/.jshintrc',
      },
      src: ['source/js/main.js'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};