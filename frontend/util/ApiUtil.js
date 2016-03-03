var snippetActions = require('../actions/snippetActions.js');

var SnippetApiUtil = require('./components/snippetApiUtil');
var LanguageApiUtil = require('./components/languageApiUtil');
var AnnotationApiUtil = require('./components/annotationApiUtil');
var SessionApiUtil = require('./components/sessionApiUtil');

var ApiUtil = {};

ApiUtil = Object.assign(ApiUtil, SnippetApiUtil);
ApiUtil = Object.assign(ApiUtil, LanguageApiUtil);
ApiUtil = Object.assign(ApiUtil, AnnotationApiUtil);
ApiUtil = Object.assign(ApiUtil, SessionApiUtil);

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;