class AddNulltoMenuColumns < ActiveRecord::Migration
  def change
    change_column_null(:restaurants, :name, false)
    change_column_null(:restaurants, :location, false)
  end
end
