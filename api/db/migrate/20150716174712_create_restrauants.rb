class CreateRestrauants < ActiveRecord::Migration
  def change
    create_table :restrauants do |t|
      t.string :name
      t.string :location
      t.string :cuisine

      t.timestamps null: false
    end
  end
end
