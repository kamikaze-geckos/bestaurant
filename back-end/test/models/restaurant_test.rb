require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  def setup
    @restaurant = restaurants(:one)
  end

  test "the default is valid" do
    assert @restaurant.valid?
  end

  test "has many items" do
    assert_respond_to @restaurant, :items
  end
end

class Name < RestaurantTest
  test "can set name" do
    @restaurant.name = "The Duke"
    assert @restaurant.valid?
  end
end

class Location < RestaurantTest
  test "can set name" do
    @restaurant.location = "Not here"
    assert @restaurant.valid?
  end
end

class Cuisine < RestaurantTest
  test "can set name" do
    @restaurant.cuisine = "Not here"
    assert @restaurant.valid?
  end
end
