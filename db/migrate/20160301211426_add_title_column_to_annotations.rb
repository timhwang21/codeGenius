class AddTitleColumnToAnnotations < ActiveRecord::Migration
  def change
    add_column :annotations, :title, :string, null: false
  end
end
