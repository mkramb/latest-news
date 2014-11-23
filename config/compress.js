module.exports = {
  wgt: {
    options: {
        archive: '<%= paths.root %>/public/app.wgt',
        mode: 'zip'
    },
    expand: true,
    cwd: '<%= paths.root %>/public/',
    src: ['**/*'],
    dest: '/'
  }
};
