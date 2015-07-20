class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string      :name,          null: false
      t.integer     :price,         null: false
      t.string      :description
      t.string      :pic
      t.string      :category
      t.belongs_to  :restaurant,     index: true

      t.timestamps null: false
    end
  end
end
