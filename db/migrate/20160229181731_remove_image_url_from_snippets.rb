class RemoveImageUrlFromSnippets < ActiveRecord::Migration
  def change
    remove_column :snippets, :image_url
  end
end
