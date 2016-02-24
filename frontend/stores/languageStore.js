var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var languageConstants = require('../constants/languageConstants');

var LanguageStore = new Store(Dispatcher);
var _languages = {};

function resetLanguage(language) {
  _languages[language.id] = language;
}

function resetAllLanguages(languages) {
  _languages = {};
  languages.forEach(function(language) {
    resetLanguage(language);
  });
}

function removeLanguage(language) {
  delete _languages[language.id];
}

LanguageStore.all = function() {
  return _languages;
  // return Object.extend({}, _languages);
};

LanguageStore.find = function(id) {
  return _languages[id];
};

LanguageStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case languageConstants.LANGUAGES_ALL_RECEIVED:
      console.log("LANGUAGES_ALL_RECEIVED");
      resetAllLanguages(payload.languages);
      this.__emitChange();
      break;
    case languageConstants.LANGUAGE_RECEIVED:
      console.log("LANGUAGE_RECEIVED");
      resetLanguage(payload.language);
      this.__emitChange();
      break;
    case languageConstants.LANGUAGE_REMOVED:
      console.log("LANGUAGE_REMOVED");
      removeLanguage(payload.language);
      this.__emitChange();
      break;
  }
};

window.LanguageStore = LanguageStore

module.exports = LanguageStore;