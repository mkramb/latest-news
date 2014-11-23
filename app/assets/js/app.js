'use strict';

var AppRouter = require('./routes');

$(function() {
  new AppRouter();
  Backbone.history.start();
});
