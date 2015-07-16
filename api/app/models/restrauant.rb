class Restrauant < ActiveRecord::Base
  has_many :items through: :menu

  validates :name, :location, presence: true
end