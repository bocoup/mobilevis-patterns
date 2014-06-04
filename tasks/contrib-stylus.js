module.exports = function(grunt) {

  var mobileVisRoot = grunt.option('root');

  grunt.config.set('stylus', {
    options: {
      'include css': true,
      paths: ['../app/src/styles'],
      import: ['nib', 'shared'],
    },
    dev: {
      options: {
        compress: false,
      },
      src: [
        mobileVisRoot + '/src/styles/app.styl',
        mobileVisRoot + '/src/modules/**/*.styl',
        mobileVisRoot + '/src/styles/media-queries.styl',
      ],
      dest: 'source/css/app.css',
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
};
