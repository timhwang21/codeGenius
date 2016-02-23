json.extract!(@language, :id, :name)

json.snippets @language.snippets do |snippet|
  json.id snippet.id
  json.title snippet.title
end