module.exports = {
  js: {
    src: [
      '<%= paths.root %>/app/library/jquery/dist/jquery.js',
      '<%= paths.root %>/app/library/bootstrap/dist/js/bootstrap.js',
      '<%= paths.root %>/app/library/underscore/underscore.js',
      '<%= paths.root %>/app/library/backbone/backbone.js'
    ],
    dest: '<%= paths.root %>/public/scripts/lib.js'
  },
  css: {
    src: [
      '<%= paths.root %>/app/library/bootstrap/dist/css/bootstrap.css',
      '<%= paths.root %>/app/library/bootstrap/dist/css/bootstrap-theme.css'
    ],
    dest: '<%= paths.root %>/public/css/lib.css'
  }
};
