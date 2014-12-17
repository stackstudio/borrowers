import Ember from 'ember';

export default Ember.ArrayController.extend({
  states: ['borrowed', 'returned'],
  queryParams: ['sortBy', 'showReturned', 'sortAscending'],
  showReturned: true,
  sortAscending: true,
  sortBy: 'description',
  sortProperties: Ember.computed('sortBy', function() {
    return [this.get('sortBy')];
  }),
  filteredResults: Ember.computed('model.[]', 'model.@each.state',
                                  'showReturned', 'sortBy',
                                  'sortAscending', function() {
    var results = this.get('arrangedContent');

    console.log('filtered');
    if (!this.showReturned) {
      results = results.filterBy('state', 'borrowed');
    }
    return results
  }),
  actions: {
    setSortBy: function(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');

      return false;
    }
  },
  contentDidChange: function() {
    console.log('**** called when we add or remove an article.');
  }.observes('model.[]'),
  stateDidChange: function() {
    console.log('**** called when the state property changes for any of the articles.');
  }.observes('model.@each.state')
});
