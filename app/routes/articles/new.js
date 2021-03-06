import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },
  deactivate: function() {
    var model = this.modelFor('articles/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },
  actions: {
    save: function(model) {
      var _this = this;

      model.save().then(function() {
        _this.store.fetch('friend', model.get('friend').get('id')).then(function() {
          _this.transitionTo('articles');
        });
      });
    },
    cancel: function() {
      this.transitionTo('articles');
    }
  }
});
