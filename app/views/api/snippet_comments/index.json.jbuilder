json.array!(@snippet_comments) do |comment|
  json.partial!('comment', comment: comment)
end
