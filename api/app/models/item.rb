class Item < ActiveRecord::Base
   belongs_to :restrauant, through :menu
   belongs_to :menu

  validates :name, :price, presence: true
end
