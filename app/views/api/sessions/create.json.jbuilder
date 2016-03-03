if @user
  json.extract! @user, :id, :username, :image_url, :iq, :body, :snippets, :annotations
end