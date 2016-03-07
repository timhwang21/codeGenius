var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var sessionConstants = require('../constants/sessionConstants');

var SessionStore = new Store(Dispatcher);
var _user = {};

function resetUser(user) {
  _user = user;
}

SessionStore.getUser = function() {
  return _user;
}

SessionStore.loggedIn = function() {
  return Object.keys(_user).length > 0;
}

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case sessionConstants.LOG_USER_IN:
      resetUser(payload.user);
      SessionStore.__emitChange();
      break;
    case sessionConstants.LOG_USER_OUT:
      resetUser({});
      SessionStore.__emitChange();
      break;
  }
}

module.exports = SessionStore;