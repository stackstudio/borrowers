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
      var _this = this,
          _friend = friend;
          
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover " + friend.get('firstName') + "!",
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
