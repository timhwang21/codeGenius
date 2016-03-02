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

AnnotationStore.all = function() {
  return _annotations;
};

AnnotationStore.allByIndex = function() {
  var results = [];
  for (var prop in _annotations) {
    if (_annotations.hasOwnProperty(prop)) {
      results.push(_annotations[prop]);
    }
  }
  // debugger;
  return results.sort((i, j) => parseInt(i.line_idx) - parseInt(j.line_idx));
};

AnnotationStore.find = function(id) {
  return _annotations[id];
};

AnnotationStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case annotationConstants.ANNOTATIONS_FOR_SNIPPET_RECEIVED:
      resetAllAnnotations(payload.annotations);
      this.__emitChange();
      // console.log("ANNOTATIONS_FOR_SNIPPET_RECEIVED");
      break;
    case annotationConstants.ANNOTATION_RECEIVED:
      resetAnnotation(payload.annotation);
      this.__emitChange();
      // console.log("ANNOTATION_RECEIVED");
      break;
    case annotationConstants.ANNOTATION_REMOVED:
      removeAnnotation(payload.annotation);
      this.__emitChange();
      // console.log("ANNOTATION_REMOVED");
      break;
  }
};

window.AnnotationStore = AnnotationStore;

module.exports = AnnotationStore;