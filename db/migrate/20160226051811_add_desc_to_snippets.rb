class AddDescToSnippets < ActiveRecord::Migration
  def change
    add_column :snippets, :desc, :text, null: false
  end
end
