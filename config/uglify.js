module.exports = {
  options: {
    except: [ 'jQuery', 'bootstrap', 'angular' ]
  },
  public: {
    files: {
      '<%= paths.root %>/public/scripts/app.js': [ '<%= paths.root %>/public/scripts/app.js' ],
      '<%= paths.root %>/public/scripts/lib.js': [ '<%= paths.root %>/public/scripts/lib.js' ]
    }
  }
};
