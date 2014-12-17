import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log('!!! all-articles index route model hook');
    return this.store.find('article');
  },
  actions: {
    save: function(article) {
      article.save();
      return false;
    },
    delete: function(article) {
      article.destroyRecord();
      return false;
    }
  }
});
