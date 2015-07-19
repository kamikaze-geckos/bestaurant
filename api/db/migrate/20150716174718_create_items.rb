class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string  :name
      t.integer :price
      t.string  :description
      t.string  :pic
      t.string  :category

      t.timestamps null: false
    end
  end
end
