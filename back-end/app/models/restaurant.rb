class Restaurant < ActiveRecord::Base
  has_many :items

  validates :name, :location, presence: true
end
