json.partial!('snippet', snippet: @snippet)

json.language @snippet.language.name
json.author @snippet.author.username

json.extract!(
  @snippet,
  :image_url, :body, :desc, :views
)

json.snippet_comments @snippet.snippet_comments do |comment|
  json.id comment.id
  json.author_id comment.author_id
  json.body comment.body
  json.upvotes comment.upvotes
  json.downvotes comment.downvotes
end

json.annotations @snippet.annotations do |annotation|
  json.id annotation.id
  json.author_id annotation.author_id
  json.body annotation.body
  json.start_idx annotation.start_idx
  json.end_idx annotation.end_idx
  json.upvotes annotation.upvotes
  json.downvotes annotation.downvotes
end

# json.tags 