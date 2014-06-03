module.exports = function(grunt) {

  var mobileVisRoot = grunt.option('root');
  if (typeof mobileVisRoot === "undefined") {
    throw new Error("Pass --root path to your mobileVis app");
  }

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
