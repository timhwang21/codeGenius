# Phase 5: Annotations, annotation comments (1.5 days)

## Rails
### Models
* Annotation
* AnnotationComment

### Controllers
* Api::AnnotationController (create, destroy, index, show, update)
* Api::AnnotationCommentsController (create, destroy, index, show, update)

### Views
* annotations/index.json.jbuilder
* annotations/show.json.jbuilder
* annotation_comments/index.json.jbuilder
* annotation_comments/show.json.jbuilder

## Flux
### Views (React Components)
* AnnotationsIndex
  - AnnotationsIndexItem
* AnnotationForm
* AnnotationCommentsIndex
  - AnnotationCommentsIndexItem
* AnnotationCommentForm

### Stores
* Annotation
* AnnotationComment

### Actions
* ApiActions.receiveAllAnnotations
* ApiActions.receiveSingleAnnotation
* ApiActions.deleteAnnotation
* ApiActions.receiveAllAnnotationComments
* ApiActions.receiveSingleAnnotationComment
* ApiActions.deleteAnnotationComment
* NoteActions.fetchAllAnnotations
* AnnotationActions.fetchSingleAnnotation
* AnnotationActions.createAnnotation
* AnnotationActions.editAnnotation
* AnnotationActions.destroyAnnotation
* AnnotationCommentActions.fetchAllAnnotationComments
* AnnotationCommentActions.fetchSingleAnnotationComment
* AnnotationCommentActions.createAnnotationComment
* AnnotationCommentActions.editAnnotationComment
* AnnotationCommentActions.destroyAnnotationComment

### ApiUtil
* ApiUtil.fetchAllAnnotations
* ApiUtil.fetchAllAnnotationComments
* ApiUtil.fetchSingleAnnotation
* ApiUtil.fetchSingleAnnotationComment
* ApiUtil.createAnnotation
* ApiUtil.editAnnotation
* ApiUtil.destroyAnnotation
* ApiUtil.createAnnotationComment
* ApiUtil.editAnnotationComment
* ApiUtil.destroyAnnotationComment
