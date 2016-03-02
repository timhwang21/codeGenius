if @user
  json.extract! @user, :username, :iq, :snippets, :annotations
end