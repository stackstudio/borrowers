import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
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
