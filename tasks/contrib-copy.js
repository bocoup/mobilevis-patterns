module.exports = function(grunt) {

  var mobileVisRoot = grunt.option('root');

  grunt.config.set('copy', {
    dev: {
      options: {
        compress: false,
      },
      files: [
        {
          expand: true,
          cwd: mobileVisRoot + '/src/assets/',
          src: [
            '*.{png,svg,jpeg,jpg,gif}',
          ],
          dest: 'source/src/assets/'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
