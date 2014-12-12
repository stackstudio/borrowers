import Ember from 'ember';

export default Ember.Route.extend({
deactivate: function() {
  var model = this.modelFor('articles.edit');

  if (model.get('isDirty')) {
    model.rollback();
  }
},
actions: {
  save: function() {
    var _this = this;
    var model = this.modelFor('articles.edit');
    model.save().then(function() {
      _this.transitionTo('articles');
    });
  },
  cancel: function() {
    this.transitionTo('articles');
  }
}
});
