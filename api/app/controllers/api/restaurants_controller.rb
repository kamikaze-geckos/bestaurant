class RestaurantsController < ApplicationController
  respond_to :json

  def index
    @restaurants = Restaurant.all
    render json: @restaurants
  end

  def show
    @restaurant = find_restaurant
    render json: @restaurants
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
      if @restaurant.save
        render  status: :created, location: nil
      else
        render json: @restaurant.errors, status: 422
    end
  end

  def update
    @restaurant = find_restaurant
    u = @restaurant.update_attributes(restaurant_params)
      if u
        render json: :index
      else
        render json: :edit
      end
    end
  end

  def destroy
    @restaurant = find_restaurant
    @restaurant.destroy
    render head: :no_content
    end
  end

  private

  def find_restaurant
    Restaurant.find(params[:id])
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :location, :cuisine)
  end
end
