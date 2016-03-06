class RemoveTitleFromAnnotation < ActiveRecord::Migration
  def change
    remove_column :annotations, :title

  end
end
