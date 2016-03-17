var snippetActions = require('../../actions/snippetActions.js');

var SnippetApiUtil = {
  fetchAllSnippets: function() {
    $.get(
      "api/snippets", 
      {}, 
      data => snippetActions.receiveAllSnippets(data)
    );
  },

  fetchUnfetchedSnippets: function() {
    $.get(
      "api/snippets", 
      {}, 
      data => snippetActions.receiveUnfetchedSnippets(data)
    );
  },

  fetchSingleSnippet: function(id) {
    $.get(
      "api/snippets/" + id,
      {},
      data => snippetActions.receiveSingleSnippet(data)
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
    $.ajax({
      url: "/api/snippets/" + id,
      type: 'PATCH',
      data: {snippet: snippet},
      success: data => snippetActions.receiveSingleSnippet(data),
      error: data => console.log("Failed to update", data)
    });
  },

  incrementViewCount: function(id) {
    $.get(
      "api/snippets/" + id + "/add_view",
      {},
      data => console.log("Incremented view", data)
    );
  },

  destroySnippet: function(id) {
    $.ajax({
      url: "/api/snippets/" + id,
      type: 'DELETE',
      success: data => snippetActions.removeSnippet(data),
      error: data => console.log("Failed to delete", data)
    });
  }
};


module.exports = SnippetApiUtil;