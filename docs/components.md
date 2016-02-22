## Component Hierarchy

* `App`
  * `Header`
  * `Body`
    * **Snippets**
    * **Annotations**
    * `SnippetForm`
  * `Footer`

**Snippets**

  * `SnippetIndex` (left pane)
    * `SnippetIndexItem` (lower right)
  * `SnippetCommentIndex`
    * `SnippetCommentForm`
    * `SnippetCommentItem`

**Annotations**

  * `AnnotationIndex` (right pane)
    * `AnnotationForm` (if no existing annotation)
    * `AnnotationIndexItem` (if existing annotation)
  * `AnnotationCommentIndex` (if existing annotation)
    * `AnnotationCommentForm`
    * `AnnotationCommentItem`
