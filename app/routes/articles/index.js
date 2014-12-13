import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return this.modelFor('friends/show').get('articles');
    var articles = this.modelFor('friends/show').get('articles');

    if (articles.get('isFulfilled')) {
      console.log("----reloading articles----");
      articles.reload();
    }

    return articles;
  },
  actions: {
    save: function(article) {
      article.save();
      return false;
    },
    delete: function(model) {
      if (model.get('constructor.typeKey') === 'friend') {
        return true;
      }
      model.destroyRecord();
      return false;
    }
  }
});
