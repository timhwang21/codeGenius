var sessionActions = require('../../actions/sessionActions');
var errorActions = require('../../actions/errorActions');

var SessionApiUtil = {
  fetchNewSession: function(userParams, callback) {
    $.post(
      "api/session/new",
      {user: userParams},
      function(fetchedUser) {
        sessionActions.receiveUser(fetchedUser);
        callback && callback();
      }).fail(function() {
        errorActions.receiveAuthError("Invalid email / password.")
      })
  },

  destroySession: function(callback) {
    $.ajax({
      url: "api/session",
      type: "DELETE", 
      success: function() {
        sessionActions.receiveLogoutRequest();
        callback && callback();
      }
    });
  },

  checkSession: function() {
    $.get(
      "api/session/check",
      {},
      function(currentUser) {
        if (Object.keys(currentUser).length !== 0) {
          sessionActions.receiveUser(currentUser);
        }
      }
    );
  }

};

module.exports = SessionApiUtil;