class Item < ActiveRecord::Base
   belongs_to :restaurant

  validates :name, :price, presence: true
end
