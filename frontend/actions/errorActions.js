var Dispatcher = require('../dispatcher/dispatcher');
var errorConstants = require('../constants/errorConstants');

var errorActions = {
  receiveAuthError: function(error) {
    Dispatcher.dispatch({
      actionType: errorConstants.RENDER_AUTH_ERROR,
      error: error
    })
  }
};

module.exports = errorActions;