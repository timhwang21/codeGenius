if @user
  json.extract! @user, :username, :image_url, :iq, :body, :snippets, :annotations
end