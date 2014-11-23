module.exports = {
  app: {
    src: '<%= paths.root %>/app/index.html',
    dest: '<%= paths.root %>/public/',
    expand: true,
    flatten: true
  },
  images: {
    src: '<%= paths.root %>/app/assets/images/*',
    dest: '<%= paths.root %>/public/images/',
    expand: true,
    flatten: true
  },
  fonts: {
    expand: true,
    flatten: true,
    src: [ '<%= paths.root %>/app/library/bootstrap/dist/fonts/*' ],
    dest: '<%= paths.root %>/public/fonts'
  }
};
