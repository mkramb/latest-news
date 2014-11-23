module.exports = {
  client: {
    files: [
      {
        '<%= paths.root %>/public/css/app.css': [
          '<%= paths.root %>/app/assets/css/app.less'
        ]
      }
    ]
  }
};
