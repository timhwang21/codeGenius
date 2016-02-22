# Flux Stores

### SnippetStore

Holds all persisted Snippet data.

##### Actions:
- `receiveAllSnippets`
- `receiveSingleSnippet`
- `removeSnippet`

##### Listeners:
- `SnippetIndex` (passed to `SnippetIndexItem`)

### SnippetFormStore

Holds un-persisted Snippet data to send to the API.

##### Actions:
- `receiveSnippetFormParams`

##### Listeners:
- `SnippetForm`

### SnippetCommentStore

Holds all persisted SnippetComment data.

##### Actions:
- `receiveAllSnippetComments`
- `receiveSingleSnippetComment`
- `removeSnippetComment`

##### Listeners:
- `SnippetCommentIndex` (passed to `SnippetCommentIndexItem`)

### SnippetCommentFormStore

Holds un-persisted SnippetComment data to send to the API.

##### Actions:
- `receiveSnippetCommentFormParams`

##### Listeners:
- `SnippetCommentForm`

### AnnotationStore

Holds all persisted Annotation data.

##### Actions:
- `receiveAllAnnotations`
- `receiveSingleAnnotation`
- `removeAnnotation`

##### Listeners:
- `AnnotationsIndex` (passed to `AnnotationIndexItem`)

### AnnotationFormStore

Holds un-persisted Annotation data to send to the API.

##### Actions:
- `receiveAnnotationFormParams`

##### Listeners:
- `AnnotationForm`

### AnnotationCommentStore

Holds all persisted AnnotationComment data.

##### Actions:
- `receiveAllAnnotationComments`
- `receiveSingleAnnotationComment`
- `removeAnnotationComment`

##### Listeners:
- `AnnotationCommentsIndex` (passed to `AnnotationCommentIndexItem`)

### AnnotationCommentFormStore

Holds un-persisted AnnotationComment data to send to the API.

##### Actions:
- `receiveAnnotationCommentFormParams`

##### Listeners:
- `AnnotationCommentForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
