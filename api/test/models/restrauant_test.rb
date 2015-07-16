require 'test_helper'

class RestrauantTest < ActiveSupport::TestCase
  def setup
    @restrauant = restrauants(:one)
  end

  test "the default is valid" do
    assert @restrauant.valid?
  end

end

class Name < RestrauantTest
  test "can set name" do
    @restrauant.name = "The Duke"
    assert @restrauant.valid?
  end
end

class Location < RestrauantTest
  test "can set name" do
    @restrauant.location = "Not here"
    assert @restrauant.valid?
  end
end

class Cuisine < RestrauantTest
  test "can set name" do
    @restrauant.cuisine = "Not here"
    assert @restrauant.valid?
  end
end