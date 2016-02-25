json.partial!('annotation', annotation: @annotation)

json.extract!(
  @annotation,
  :body, :upvotes, :downvotes
)

# json.annotation_comments @annotation.annotation_comments do |comment|
#   json.id comment.id
#   json.author_id comment.author_id
#   json.body comment.body
#   json.upvotes comment.upvotes
#   json.downvotes comment.downvotes
# end
