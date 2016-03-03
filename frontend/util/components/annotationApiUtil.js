var annotationActions = require('../../actions/annotationActions.js');

var AnnotationApiUtil = {
  fetchAnnotationsForSnippet: function(snippetId) {
    $.get(
      "api/snippets/" + snippetId + "/annotations",
      {},
      data => annotationActions.receiveAnnotationsForSnippet(data)
    );
  },

  fetchSingleAnnotation: function(id) { // do I even need this?
    $.get(
      "api/annotations/" + id,
      {},
      data => annotationActions.receiveSingleAnnotation(data)
    );
  },

  createAnnotation: function(annotation, callback) {
    $.post(
      "/api/annotations", 
      {annotation: annotation}, 
      function(data) {
        annotationActions.receiveSingleAnnotation(data);
        callback && callback(data.id);
      }
    );
  },

  updateAnnotation: function(id, annotation) {
    $.ajax({
      url: "/api/annotations/" + id,
      type: 'PATCH',
      data: {annotation: annotation},
      success: data => annotationActions.receiveSingleAnnotation(data),
      error: data => console.log("Failed to update", data)
    });
  },

  destroyAnnotation: function(id) {
    $.ajax({
      url: "/api/annotations/" + id,
      type: 'DELETE',
      success: data => annotationActions.removeAnnotation(data),
      error: data => console.log("Failed to delete", data)
    });
  }
};

module.exports = AnnotationApiUtil;