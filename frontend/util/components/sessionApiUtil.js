var sessionActions = require('../../actions/sessionActions');
var errorActions = require('../../actions/errorActions');

var SessionApiUtil = {
  fetchNewSession: function(userParams, callback, failureCallback) {
    $.post(
      "api/session",
      {user: userParams},
      function(fetchedUser) {
        if (Object.keys(fetchedUser).length > 0) {
          localStorage.setItem('currentUser', fetchedUser.username);

          sessionActions.receiveUser(fetchedUser);
          callback && callback();
        } else {
          failureCallback();
        }
      }).fail(function() {
        failureCallback();
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
        } else {
          localStorage.removeItem('currentUser');
        }
      }
    );
  }

};

module.exports = SessionApiUtil;