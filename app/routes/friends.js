import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+--- save action bubbled up to friends route');
      return true;
    },
    cancel: function() {
      console.log('+--- save action bubbled up to friends route');
      return true;
    },
    delete: function(friend) {
      var _this = this;

      swal({
        title: "Are you sure?",
        text: friend.get('firstName') + " currently has " + friend.get('totalArticles') + " items of yours!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Delete",
        closeOnConfirm: false
      },
      function() {
        friend.destroyRecord().then(function() {
          swal("Deleted!", friend.get('fullName'), "success");
          _this.transitionTo('friends.index');
        });
      });
    }
  }
});
