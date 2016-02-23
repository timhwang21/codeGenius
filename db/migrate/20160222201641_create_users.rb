class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :image_url, default: "codegenius-logo.png"
      t.text :body
      t.integer :iq, default: 0
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps null: false
    end

    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
  end

end
