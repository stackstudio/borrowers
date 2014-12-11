import Ember from 'ember';

export default Ember.ArrayController.extend({
  states: ['borrowed', 'returned'],
  queryParams: ['sortBy', 'showReturned'],
  showReturned: true,
  filteredResults: Ember.computed('showReturned', function() {
    if (this.showReturned) {
      return this;
    } else {
      return this.filterBy('state', 'borrowed');
    }
  }),
  contentDidChange: function() {
    console.log('**** called when we add or remove an article.');
  }.observes('model.[]'),
  stateDidChange: function() {
    console.log('**** called when the state property changes for any of the articles.');
  }.observes('model.@each.state')
});
