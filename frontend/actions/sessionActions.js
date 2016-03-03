var Dispatcher = require('../dispatcher/dispatcher');
var sessionConstants = require('../constants/sessionConstants');

var sessionActions = {
  receiveUser: function(user) {
    Dispatcher.dispatch({
      actionType: sessionConstants.LOG_USER_IN,
      user: user
    })
  },

  receiveLogoutRequest: function() {
    Dispatcher.dispatch({
      actionType: sessionConstants.LOG_USER_OUT
    })
  }
};

module.exports = sessionActions;