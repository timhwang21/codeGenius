var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var userConstants = require('../constants/userConstants');

var UserStore = new Store(Dispatcher);
var _users = {};

function resetUser(user) {
  _users[user.id] = user;
}

function resetAllUsers(users) {
  _users = {};
  users.forEach(user => resetUser(user));
}

function removeUser(user) {
  delete _users[user.id];
}

UserStore.all = function() {
  return _users;
};

UserStore.find = function(id) {
  return _users[id];
};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case userConstants.USERS_ALL_RECEIVED:
      resetAllUsers(payload.users);
      this.__emitChange();
      // console.log("USERS_ALL_RECEIVED");
      break;
    case userConstants.USER_RECEIVED:
      resetUser(payload.user);
      this.__emitChange();
      // console.log("USER_RECEIVED");
      break;
    case userConstants.USER_REMOVED:
      removeUser(payload.user);
      this.__emitChange();
      // console.log("USER_REMOVED");
      break;
  }
};

window.UserStore = UserStore;

module.exports = UserStore;