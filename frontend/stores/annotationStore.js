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
  // debugger;
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
  return results.sort((i, j) => i.lineIdx - j.lineIdx); // TODO test me
};

AnnotationStore.findById = function(id) {
  return _annotations[id];
};

AnnotationStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case annotationConstants.ANNOTATIONS_FOR_SNIPPET_RECEIVED:
      resetAllAnnotations(payload.annotations);
      this.__emitChange();
      break;
    case annotationConstants.ANNOTATION_RECEIVED:
      resetAnnotation(payload.annotation);
      this.__emitChange();
      break;
    case annotationConstants.ANNOTATION_REMOVED:
      removeAnnotation(payload.annotation);
      this.__emitChange();
      break;
  }

};




window.AnnotationStore = AnnotationStore;

module.exports = AnnotationStore;