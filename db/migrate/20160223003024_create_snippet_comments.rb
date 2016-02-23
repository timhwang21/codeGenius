class CreateSnippetComments < ActiveRecord::Migration
  def change
    create_table :snippet_comments do |t|
      t.integer :author_id, null: false
      t.integer :snippet_id, null: false
      t.text :body, null: false
      t.integer :upvotes, default: 0
      t.integer :downvotes, default: 0

      t.timestamps null: false
    end

    add_index :snippet_comments, :author_id
    add_index :snippet_comments, :snippet_id
  end
end
