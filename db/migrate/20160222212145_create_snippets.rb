class CreateSnippets < ActiveRecord::Migration
  def change
    create_table :snippets do |t|
      t.integer :author_id, null: false
      t.integer :language_id, null: false
      t.string :title, null: false
      t.string :image_url
      t.text :body, null: false
      t.integer :views, default: 0

      t.timestamps null: false
    end

    add_index :snippets, :author_id
    add_index :snippets, :language_id
  end
end
