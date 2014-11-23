'use strict';

function stripHtml(html) {
  var div = document.createElement('div');
  div.innerHTML = html;

  return (
    div.textContent || div.innerText || ''
  );
}

var NewsModel = Backbone.Model.extend({

  getData: function() {
    var description = stripHtml(this.get('description'));
    var media = this.get('media:content');

    var data = {
      id: this.collection.indexOf(this),
      title: this.get('title'),
      description: description,
      link: this.get('link')
    };

    if (!_.isEmpty(media)) {
      data.image = media.url;
    }

    return data;
  }

});

var NewsCollection = Backbone.Collection.extend({

  model: NewsModel,
  url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=DqsF_ZG72xGLbes9l7okhQ&_render=json',

  sync: function(method, collection, options) {
    options.dataType = 'jsonp';
    options.jsonp = '_callback';

    return Backbone.sync(method, collection, options);
  },

  parse: function(response) {
    if (response.count) {
      return response.value.items;
    }
  }

});

module.exports = NewsCollection;
