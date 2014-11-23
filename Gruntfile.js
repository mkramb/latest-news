module.exports = function(grunt) {
  'use strict';

  var config = require('./config')(grunt);

  config.pkg = grunt.file.readJSON('./package.json');
  config.paths = { root: __dirname };

  grunt.initConfig(config);

  Object.keys(config.pkg.devDependencies).forEach(function(item) {
    if (item.lastIndexOf('grunt-', 0) === 0) {
      grunt.loadNpmTasks(item);
    }
  });

  grunt.registerTask('default', [
    'availabletasks'
  ]);

  grunt.registerTask('bower', [ 'shell:bower' ]);
  grunt.registerTask('run', [ 'connect:server:keepalive' ]);
  grunt.registerTask('wgt', [ 'compress:wgt' ]);

  grunt.registerTask('dev', [
    'clean',
    'copy',
    'concat:js',
    'concat:css',
    'browserify:client',
    'less:client'
  ]);

  grunt.registerTask('build', [
    'dev',
    'uglify:public',
    'cssmin:public'
  ]);
};
