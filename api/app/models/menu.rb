class Menu < ActiveRecord::Base
  belongs_to :restaruant
  has_many :items

  validates :item_id, :restaruant_id, presence: true
end
