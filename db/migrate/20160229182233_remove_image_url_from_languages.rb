class RemoveImageUrlFromLanguages < ActiveRecord::Migration
  def change
    remove_column :languages, :image_url

  end
end
