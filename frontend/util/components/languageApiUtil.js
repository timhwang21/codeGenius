var languageActions = require('../../actions/languageActions.js');

var LanguageApiUtil = {
  fetchAllLanguages: function() {
    $.get(
      "api/languages", 
      {}, 
      data => languageActions.receiveAllLanguages(data)
    );
  },

  fetchSingleLanguage: function(id) {
    $.get(
      "api/languages/" + id,
      {},
      data => anguageActions.receiveSingleLanguage(data)
    );
  },

  createLanguage: function(language) {
    $.post(
      "/api/languages", 
      {language: language}, 
      data => languageActions.receiveSingleLanguage(data)
    );
  },

  updateLanguage: function(id, language) {
    $.ajax({
      url: "/api/languages/" + id,
      type: 'PATCH',
      data: {language: language},
      success: data => languageActions.receiveSingleLanguage(data),
      error: data => console.log("Failed to update", data)
    });
  },

  destroyLanguage: function(id) {
    $.ajax({
      url: "/api/languages/" + id,
      type: 'DELETE',
      success: data => languageActions.removeLanguage(data),
      error: data => console.log("Failed to delete", data)
    });
  }
};


module.exports = LanguageApiUtil;