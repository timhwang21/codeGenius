var Dispatcher = require('../dispatcher/dispatcher');
var userConstants = require('../constants/userConstants');

var userActions = {
  receiveAllUsers: function(users) {
    Dispatcher.dispatch({
      actionType: userConstants.USERS_ALL_RECEIVED,
      users: users
    });
  },

  receiveSingleUser: function(user) {
    Dispatcher.dispatch({
      actionType: userConstants.USER_RECEIVED,
      user: user
    });
  },

  removeUser: function(user) {
    Dispatcher.dispatch({
      actionType: userConstants.USER_REMOVED,
      user: user
    });
  } 
};

module.exports = userActions;