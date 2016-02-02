module.exports = function(grunt) {
  //load all tasks
  require('load-grunt-tasks')(grunt);

  var modRewrite = require('connect-modrewrite');

  grunt.initConfig({


    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          base: ['.'],
          port: 8000,
          keepalive: true,
          debug: true,
          useAvailablePort: true,

          middleware: function (connect, options, defaultMiddleware) {


             return [
                // Include the proxy first

                modRewrite([
                  '^/ http://0.0.0.0:3000/ [P]'

                ])


             ].concat(defaultMiddleware);
          }

        }




      }
    }


  });


  grunt.registerTask('default', ['connect']);


};
