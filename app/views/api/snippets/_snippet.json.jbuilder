json.extract!(
  snippet,
  :id, :author_id, :language_id, :title, :views
)

json.language snippet.language.name
