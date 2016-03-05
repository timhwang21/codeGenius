json.partial!('user', user: @user)

json.extract!(
  @user,
  :image_url, :body, :iq
)

json.snippets @user.snippets do |snippet|
  json.id snippet.id
  json.title snippet.title
  json.language_id snippet.language.id
  json.language snippet.language.name
end

# json.snippet_comments @user.snippet_comments do |comment|
#   json.id comment.id
#   json.snippet_id comment.snippet_id
#   json.snippet_title comment.snippet.title
#   if comment.body.length > 50 
#     json.body comment.body[0,50] + "..."
#   else
#     json.body comment.body
#   end
#   json.upvotes comment.upvotes
#   json.downvotes comment.downvotes
# end

json.annotations @user.annotations do |annotation|
  json.id annotation.id
  json.title annotation.title
  json.snippet_id annotation.snippet_id
  json.snippet_title annotation.snippet.title
  json.line_idx annotation.line_idx
  json.body annotation.body
  json.upvotes annotation.upvotes
  json.downvotes annotation.downvotes
end

# json.annotation_comments @user.annotation_comments do |comment| # refactor into one comment model?
#   json.id comment.id
#   json.annotation_id comment.annotation_id
#   json.body comment.body
#   json.upvotes comment.upvotes
#   json.downvotes comment.downvotes
# end