class ChangeDefaultOfSnippets < ActiveRecord::Migration
  def change
    change_column_default :snippets, :image_url, ""
  end
end
