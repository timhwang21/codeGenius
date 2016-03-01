var Dispatcher = require('../dispatcher/dispatcher');
var annotationConstants = require('../constants/annotationConstants');

var annotationActions = {
  receiveAnnotationsForSnippet: function(annotations) {
    Dispatcher.dispatch({
      actionType: annotationConstants.ANNOTATIONS_FOR_SNIPPET_RECEIVED,
      annotations: annotations
    });
  },
  receiveSingleAnnotation: function(annotation) {
    Dispatcher.dispatch({
      actionType: annotationConstants.ANNOTATION_RECEIVED,
      annotation: annotation
    });
  },
  removeAnnotation: function(annotation) {
    Dispatcher.dispatch({
      actionType: annotationConstants.ANNOTATION_REMOVED,
      annotation: annotation
    })
  }
};

module.exports = annotationActions;