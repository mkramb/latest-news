module.exports = {
  scripts: {
    files: [
      '<%= paths.root %>/app/**'
    ],
    tasks: [ 'dev' ],
    options: {
      livereload: true,
      nospawn: true,
      atBegin: true
    }
  }
};
