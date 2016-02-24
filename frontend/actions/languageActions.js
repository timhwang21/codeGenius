var Dispatcher = require('../dispatcher/dispatcher');
var languageConstants = require('../constants/languageConstants');

var languageActions = {
  receiveAllLanguages: function(languages) {
    Dispatcher.dispatch({
      actionType: languageConstants.LANGUAGES_ALL_RECEIVED,
      languages: languages
    });
  },
  receiveSingleLanguage: function(language) {
    Dispatcher.dispatch({
      actionType: languageConstants.LANGUAGE_RECEIVED,
      language: language
    });
  },
  removeLanguage: function(language) {
    Dispatcher.dispatch({
      actionType: languageConstants.LANGUAGE_REMOVED,
      language: language
    })
  }
};

module.exports = languageActions;