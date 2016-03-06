json.extract!(
  annotation,
  :id, :author_id, :snippet_id, :line_idx, :body, :upvotes, :downvotes
)

json.title annotation.snippet.body.split("\n")[annotation.line_idx].strip

json.author annotation.author.username
