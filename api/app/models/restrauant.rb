class Restrauant < ActiveRecord::Base

  validates :name, :location, presence: true
end