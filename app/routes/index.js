import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('friend').then(function(friends) {
      return {
        friendsCount: friends.get('length'),
        articlesCount: function() {
          var count = 0;

          friends.forEach(function(friend) {
            count += friend.get('totalArticles');
          });
          return count;
        }()
      };
    });
  }
});
