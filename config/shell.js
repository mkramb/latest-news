const SHELL_OPTIONS = {
  stdout: true,
  stderr: true,
  stdin: true
};

module.exports = {
  bower: {
    options: SHELL_OPTIONS,
    command: function() {
      return [
        'cd app',
        'bower cache clean',
        'bower install'
      ].join(' && ');
    }
  }
};
