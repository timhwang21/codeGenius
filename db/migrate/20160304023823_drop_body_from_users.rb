class DropBodyFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :body
  end
end
