module.exports = function(grunt) {

  grunt.config.set('middleman', {

    options: {
      userBundle: true,
      verbose: false
    },

    server: {
      options: {
        host: "0.0.0.0",
        port: 4567
      }
    },

    build: {
      options: {
        env : { target: "prod" },
        command: "build"
      }
    }
  });

  grunt.loadNpmTasks('grunt-middleman');
};
