module.exports = function(grunt) {

  var mobileVisRoot = grunt.option('root');
  if (typeof mobileVisRoot === "undefined") {
    throw new Error("Pass --root path to your mobileVis app");
  }


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
