class AddNulltoitemsColumns < ActiveRecord::Migration
  def change
    change_column_null(:items, :name, false)
    change_column_null(:items, :price, false)
  end
end
