json.extract!(
  annotation,
  :id, :author_id, :snippet_id, :line_idx, :body, :upvotes, :downvotes
)

json.author annotation.author.username
