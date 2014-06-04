module.exports = function(grunt) {

  var creds = grunt.file.readJSON("credentials.json");

  if (typeof creds === "undefined") {
    throw new Error("Setup your credentials.json file from the sample!");
  }

  grunt.config.set('s3', {

    options: {
      key: creds.accessKeyId,
      secret: creds.secretAccessKey,
      bucket: "patterns.mobilev.is",
      access: 'public-read',
      cache: false,
      headers: {

        // expire in an hour
        "Cache-Control": "max-age=3600000, public",
        "Expires": new Date(Date.now() + 3600000).toUTCString()
      }
    },
    deploy: {
      upload: [{
        src: "build/**/*",
        dest: "/",
        rel: "build"
      }]
    }
  });

  grunt.loadNpmTasks('grunt-s3');
};
