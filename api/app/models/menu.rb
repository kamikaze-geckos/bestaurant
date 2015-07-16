class Menu < ActiveRecord::Base
  belongs_to :restaruant
  belongs_to :item
end
