var snippetActions = require('../actions/snippetActions.js');
var SnippetApiUtil = require('./components/snippetApiUtil');
var LanguageApiUtil = require('./components/languageApiUtil');

var ApiUtil = {};

ApiUtil = Object.assign(ApiUtil, SnippetApiUtil);
ApiUtil = Object.assign(ApiUtil, LanguageApiUtil);

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;