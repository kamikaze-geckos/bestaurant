class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.integer :restaurant_id, null: false
      t.integer :item_id, null: false

      t.timestamps null: false
    end

    add_index :menus, :restaurant_id
    add_index :menus, :item_id
  end
end
