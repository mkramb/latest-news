'use strict';

var NewsView = require('./views');

var AppRouter = Backbone.Router.extend({

  routes: {
    'details/:itemId': 'getItem',
    '*actions': 'defaultRoute'
  },

  getItem: function(itemId) {
    var id = +(
      itemId
    );

    if (
      ( _.isNaN(id) || !_.isNumber(id) ) ||
      ( id < 0 || id >= 10 )
    ) {
      this.navigate('#/');
      return;
    }

    if (this.newsView) {
      this.newsView.trigger('viewItem', id);
    }
    else {
      this.newsView = new NewsView({
        el: $('#content')
      });

      this.listenTo(this.newsView.collection, 'reset', _.bind(function() {
        this.newsView.trigger('viewItem', id);
      }, this));
    }
  },

  defaultRoute: function() {
    if (this.newsView) {
      this.newsView.trigger('viewAll');
    }
    else {
      this.newsView = new NewsView({
        el: $('#content')
      });
    }
  }

});

module.exports = AppRouter;
