json.array!(@snippets) do |snippet|
  json.partial!('snippet', snippet: snippet)
end
