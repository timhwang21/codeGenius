class AddIndexToAnnotations < ActiveRecord::Migration
  def change
    add_index :annotations, [:line_idx, :snippet_id], unique: true
  end
end
