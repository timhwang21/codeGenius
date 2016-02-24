var languageActions = require('../../actions/languageActions.js');

var LanguageApiUtil = {
  fetchAllLanguages: function() {
    $.get(
      "api/languages", 
      {}, 
      function(data) {
        languageActions.receiveAllLanguages(data);
      }
    );
  },

  fetchSingleLanguage: function(id) {
    $.get(
      "api/languages/" + id,
      {},
      function(data) {
        languageActions.receiveSingleLanguage(data);
      }
    );
  },

  createLanguage: function(language) {
    $.post(
      "/api/languages", 
      {language: language}, 
      function(data) {
        languageActions.receiveSingleLanguage(data);
      }
    );
  },

  updateLanguage: function(id, language) {
    language.id = id;
    $.ajax({
      url: "/api/languages/" + id,
      type: 'PATCH',
      data: {language: language},
      success: function(data) {
        languageActions.receiveSingleLanguage(data);
      },
      error: function(data) {console.log("Failed to update", data)}
    });
  },

  destroyLanguage: function(id) {
    $.ajax({
      url: "/api/languages/" + id,
      type: 'DELETE',
      success: function(data) {
        languageActions.removeLanguage(data);
      },
      error: function(data) {console.log("Failed to delete", data)}
    });
  }
};


module.exports = LanguageApiUtil;