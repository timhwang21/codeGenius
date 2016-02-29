class ChangeAnnotationIdx < ActiveRecord::Migration
  def change
    remove_column :annotations, :start_idx
    remove_column :annotations, :end_idx
    add_column :annotations, :line_idx, :integer, null: false
  end
end
