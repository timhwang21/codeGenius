var userActions = require('../../actions/userActions');

var UserApiUtil = {
  fetchAllUsers: function() {
    $.get(
      "api/users",
      {},
      data => userActions.receiveAllUsers(data)
    );
  },

  fetchSingleUser: function(id) {
    $.get(
      "api/users/" + id,
      {},
      data => userActions.receiveSingleUser(data)
    );
  },

  createUser: function(userParams, callback, failureCallback) {
    $.post(
      "api/users",
      {user: userParams},
      function(data) {
        userActions.receiveSingleUser(data);
        callback && callback(data.id);
      }
    ).fail(function() {
      failureCallback();
    });
  },

  updateUser: function(id, user) {
    $.ajax({
      url: "api/users/" + id,
      type: "PATCH", 
      data: {user: user},
      success: data => userActions.receiveSingleUser(data),
      error: data => console.log("Failed to update", data)
    });
  },

  destroyUser: function(id) {
    $.ajax({
      url: "api/users/" + id,
      type: "DELETE", 
      success: data => userActions.removeUser(data),
      error: data => console.log("Failed to delete", data)
    })
  }
};

module.exports = UserApiUtil;