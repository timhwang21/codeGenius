json.partial!('comment', comment: @snippet_comment)

json.extract!(
  @snippet_comment,
  :snippet_id, :body, :upvotes, :downvotes
)