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
  languages.forEach(language => resetLanguage(language));
}

function removeLanguage(language) {
  delete _languages[language.id];
}

LanguageStore.all = function() {
  var results = [];
  for (var prop in _languages) {
    if (_languages.hasOwnProperty(prop)) {
      results.push(_languages[prop]);
    }
  }
  return results;
};

LanguageStore.allObject = function() {
  return Object.assign({}, _languages);
};

LanguageStore.find = function(id) {
  return _languages[id];
};

LanguageStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case languageConstants.LANGUAGES_ALL_RECEIVED:
      // console.log("LANGUAGES_ALL_RECEIVED");
      resetAllLanguages(payload.languages);
      this.__emitChange();
      break;
    case languageConstants.LANGUAGE_RECEIVED:
      // console.log("LANGUAGE_RECEIVED");
      resetLanguage(payload.language);
      this.__emitChange();
      break;
    case languageConstants.LANGUAGE_REMOVED:
      // console.log("LANGUAGE_REMOVED");
      removeLanguage(payload.language);
      this.__emitChange();
      break;
  }
};

module.exports = LanguageStore;