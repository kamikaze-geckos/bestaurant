class Item < ActiveRecord::Base
  belongs_to :restrauant

  validates :name, :price, presence: true
end
