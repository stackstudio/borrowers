import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    return request('api/friends').then(function(data) {
      return {
        friendsCount: data.friends.length,
        articlesCount: function() {
          var count = 0;

          data.friends.forEach(function(friend) {
            count += friend.total_articles;
          });
          return count;
        }()
      };
    });
  }
});
