var Dispatcher = require('../dispatcher/dispatcher');
var snippetConstants = require('../constants/snippetConstants');

var snippetActions = {
  receiveAllSnippets: function(snippets) {
    Dispatcher.dispatch({
      actionType: snippetConstants.SNIPPETS_ALL_RECEIVED,
      snippets: snippets
    });
  },

  receiveSingleSnippet: function(snippet) {
    Dispatcher.dispatch({
      actionType: snippetConstants.SNIPPET_RECEIVED,
      snippet: snippet
    });
  },
  
  removeSnippet: function(snippet) {
    Dispatcher.dispatch({
      actionType: snippetConstants.SNIPPET_REMOVED,
      snippet: snippet
    });
  }
};

module.exports = snippetActions;