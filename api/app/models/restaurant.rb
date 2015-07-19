  class Restaurant < ActiveRecord::Base
  has_many :items, through: :menu
  has_one :menu

  validates :name, :location, presence: true
end
