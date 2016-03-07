var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var snippetConstants = require('../constants/snippetConstants');

var SnippetStore = new Store(Dispatcher);
var _snippets = {};

function resetSnippet(snippet) {
  _snippets[snippet.id] = snippet;
}

function resetAllSnippets(snippets) {
  _snippets = {};
  snippets.forEach(snippet => resetSnippet(snippet));
}

function removeSnippet(snippet) {
  delete _snippets[snippet.id];
}

SnippetStore.all = function() {
  var results = [];
  for (var prop in _snippets) {
    if (_snippets.hasOwnProperty(prop)) {
      results.push(_snippets[prop]);
    }
  }
  return results;
};

SnippetStore.popular = function(take) {
  take = typeof take == 'undefined' ? 
    results.length : 
    take; 

  var results = this.all();

  results.sort(function(a,b) {
    return (a.views < b.views) ? 
      1 : 
      ((b.views < a.views) ? 
        -1 : 
        0
      );
    } 
  );
  return results.slice(0, take);
},

SnippetStore.last = function() {
  var keys = Object.keys(_snippets);
  var last_key = keys[keys.length - 1];
  return _snippets[last_key];
}

SnippetStore.find = function(id) {
  return _snippets[id];
};

SnippetStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case snippetConstants.SNIPPETS_ALL_RECEIVED:
      resetAllSnippets(payload.snippets);
      this.__emitChange();
      break;
    case snippetConstants.SNIPPET_RECEIVED:
      resetSnippet(payload.snippet);
      this.__emitChange();
      break;
    case snippetConstants.SNIPPET_REMOVED:
      removeSnippet(payload.snippet);
      this.__emitChange();
      break;
  }
};

module.exports = SnippetStore;