class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|
      t.integer :author_id, null: false
      t.integer :snippet_id, null: false
      t.text :body, null: false
      t.integer :start_idx, null: false
      t.integer :end_idx, null: false
      t.integer :upvotes, default: 0
      t.integer :downvotes, default: 0

      t.timestamps null: false
    end

    add_index :annotations, :author_id
    add_index :annotations, :snippet_id
  end
end
