class ChangeDefaultImageUrlForUser < ActiveRecord::Migration
  def change
    change_column_default(:users, :image_url, "codegenius-logo-square.png")
  end
end
