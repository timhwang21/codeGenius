json.partial!('comment', comment: @snippet_comment)

json.extract!(
  @snippet_comment,
  :body, :upvotes, :downvotes
)