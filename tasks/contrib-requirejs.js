module.exports = function(grunt) {

  grunt.config.set('requirejs', {
    public: {
      options: {
        baseUrl: './source/',
        mainConfigFile: 'source/js/config.js',
        include: ['js/config'],
        insertRequire: ['js/config'],
        name: 'bower_components/almond/almond',
        out: 'source/js/app.js',
        optimize: 'uglify2',
        generateSourceMaps: true,
        preserveLicenseComments: false
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

};
