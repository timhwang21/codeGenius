var snippetActions = require('../../actions/snippetActions.js');

var SnippetApiUtil = {
  fetchAllSnippets: function() {
    $.get(
      "api/snippets", 
      {}, 
      function(data) {
        snippetActions.receiveAllSnippets(data);
      }
    );
  },

  fetchSingleSnippet: function(id) {
    $.get(
      "api/snippets/" + id,
      {},
      function(data) {
        snippetActions.receiveSingleSnippet(data);
      }
    );
  },

  createSnippet: function(snippet, callback) {
    $.post(
      "/api/snippets", 
      {snippet: snippet}, 
      function(data) {
        snippetActions.receiveSingleSnippet(data);
        callback && callback(data.id);
      }
    );
  },

  updateSnippet: function(id, snippet) {
    snippet.id = id;
    $.ajax({
      url: "/api/snippets/" + id,
      type: 'PATCH',
      data: {snippet: snippet},
      success: function(data) {
        snippetActions.receiveSingleSnippet(data);
      },
      error: function(data) {console.log("Failed to update", data)}
    });
  },

  destroySnippet: function(id) {
    $.ajax({
      url: "/api/snippets/" + id,
      type: 'DELETE',
      success: function(data) {
        snippetActions.removeSnippet(data);
      },
      error: function(data) {console.log("Failed to delete", data)}
    });
  }
};


module.exports = SnippetApiUtil;