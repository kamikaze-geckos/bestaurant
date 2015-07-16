class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.integer :restaruant_id, null: false
      t.integer :item_id, null: false

      t.timestamps null: false
    end

    add_index :menus, :restaruant_id
    add_index :menus, :item_id
  end
end
