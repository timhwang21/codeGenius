# Phase 2 - 3: Model, API, and basic APIUtil for snippets and comments (2.5 days)

## Rails
### Models
* Snippet
* SnippetComment
* Language

### Controllers
* Api::SnippetsController (create, destroy, index, show, update)
* Api::SnippetCommentsController (create, destroy, index, show, update)

### Views
* snippets/index.json.jbuilder
* snippets/show.json.jbuilder
* snippet_comments/index.json.jbuilder
* snippet_comments/show.json.jbuilder

## Flux
### Views (React Components)
* SnippetsIndex
  - SnippetsIndexItem
* SnippetForm
* SnippetCommentsIndex
  - SnippetCommentsIndexItem
* SnippetCommentForm

### Stores
* Snippet
* Comment

### Actions
* ApiActions.receiveAllSnippets
* ApiActions.receiveSingleSnippet
* ApiActions.deleteSnippet
* ApiActions.receiveAllSnippetComments
* ApiActions.receiveSingleSnippetComment
* ApiActions.deleteSnippetComment
* NoteActions.fetchAllSnippets
* SnippetActions.fetchSingleSnippet
* SnippetActions.createSnippet
* SnippetActions.editSnippet
* SnippetActions.destroySnippet
* SnippetCommentActions.fetchAllSnippetComments
* SnippetCommentActions.fetchSingleSnippetComment
* SnippetCommentActions.createSnippetComment
* SnippetCommentActions.editSnippetComment
* SnippetCommentActions.destroySnippetComment

### ApiUtil
* ApiUtil.fetchAllSnippets
* ApiUtil.fetchAllSnippetComments
* ApiUtil.fetchSingleSnippet
* ApiUtil.fetchSingleSnippetComment
* ApiUtil.createSnippet
* ApiUtil.editSnippet
* ApiUtil.destroySnippet
* ApiUtil.createSnippetComment
* ApiUtil.editSnippetComment
* ApiUtil.destroySnippetComment

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap

