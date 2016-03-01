var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var annotationConstants = require('../constants/annotationConstants');

var AnnotationStore = new Store(Dispatcher);
var _annotations = {};

function resetAnnotation(annotation) {
  _annotations[annotation.id] = annotation;
}

function resetAllAnnotations(annotations) {
  _annotations = {};
  annotations.forEach(annotation => resetAnnotation(annotation));
}

function removeAnnotation(annotation) {
  delete _annotations[annotation.id];
}

SnippetStore.findById = function(id) {
  return _snippets[id];
};

SnippetStore.findBySnippetIdAndLineIdx = function(snippetId, lineIdx) {


};




window.AnnotationStore = AnnotationStore;

module.exports = AnnotationStore;