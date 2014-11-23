'use strict';

var NewsCollection = require('./models');

function template(id, data) {
  return Mustache.render(
    $('#' + id).html(), data || {}
  );
}

var NewsDetailView = Backbone.View.extend({

  initialize: function(options) {
    this.data = options.data || {};
  },

  render: function() {
    this.$el.html(template('detail',
      this.data
    ));

    return this;
  }

});

var NewsView = Backbone.View.extend({

  initialize: function() {
    this.collection = new NewsCollection();

    this.listenTo(this.collection, 'reset', this.onChange);
    this.listenTo(this, 'viewItem', this.onViewItem);
    this.listenTo(this, 'viewAll', this.onViewAll);

    this.collection.fetch({
      error: this.onError,
      reset: true
    });
  },

  onChange: function() {
    var latest = this.collection.first(10);

    this.$el.html(template('listing', {
      news: _.map(latest, function(item) {
        return item.getData();
      })
    }));

    $('html, body').animate(
      { scrollTop: 0 }, 'fast'
    );
  },

  onViewAll: function(itemId) {
    this.removeDetailView();
    this.$el.find('.listing').show();
  },

  onViewItem: function(id) {
    if (this.detailView) {
      this.removeDetailView();
    }

    this.detailView = new NewsDetailView({
      data: this.collection.at(id).getData()
    });

    this.$el.find('.listing').hide();
    this.$el.append(this.detailView.render().$el);
  },

  onError: function() {
    this.$el.html(template('error', {
      title: 'There was an error. Please try again later.'
    }));
  },

  removeDetailView: function() {
    this.detailView.unbind().remove();
  }

});

module.exports = NewsView;
