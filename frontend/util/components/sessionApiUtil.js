var sessionActions = require('../../actions/sessionActions');
var errorActions = require('../../actions/errorActions');

var SessionApiUtil = {
  fetchNewSession: function(userParams, callback) {
    $.post(
      "api/session",
      {user: userParams},
      function(fetchedUser) {
        if (Object.keys(fetchedUser).length > 0) {
          localStorage.setItem('currentUser', fetchedUser.username);

          sessionActions.receiveUser(fetchedUser);
        }
        callback && callback();
      }).fail(function() {
        console.log("Fail!");
        // errorActions.receiveAuthError("Invalid email / password.")
        // Why is this requesting from 'sessioncontroller'?
      })
  },

  destroySession: function(callback) {
    $.ajax({
      url: "api/session",
      type: "DELETE", 
      success: function() {
        localStorage.removeItem('currentUser');

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