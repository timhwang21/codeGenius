var annotationActions = require('../../actions/annotationActions.js');

var AnnotationApiUtil = {
  fetchAnnotationsForSnippet: function(snippetId) {
    $.get(
      "api/snippets/" + snippetId + "/annotations",
      {},
      function(data) {
        annotationActions.receiveAnnotationsForSnippet(data);
      }
    );
  },

  fetchSingleAnnotation: function(id) {
    $.get(
      "api/annotations/" + id,
      {},
      function(data) {
        annotationActions.receiveSingleAnnotation(data);
      }
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
    annotation.id = id;
    $.ajax({
      url: "/api/annotations/" + id,
      type: 'PATCH',
      data: {annotation: annotation},
      success: function(data) {
        annotationActions.receiveSingleAnnotation(data);
      },
      error: function(data) {console.log("Failed to update", data)}
    });
  },

  destroyAnnotation: function(id) {
    $.ajax({
      url: "/api/annotations/" + id,
      type: 'DELETE',
      success: function(data) {
        annotationActions.removeAnnotation(data);
      },
      error: function(data) {console.log("Failed to delete", data)}
    });
  }
};

module.exports = AnnotationApiUtil;