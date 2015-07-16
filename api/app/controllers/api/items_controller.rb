class itemsController < ApplicationController
  respond_to :json

  def index
    @items = Item.all
    render json: @items
  end

  def show
    @item = find_item
    render json: @items
  end

  def create
    @item = Item.new(item_params)
      if @item.save
        render  status: 201
      else
        render json: @item.errors, status: 422
    end
  end

  def update
    @item = find_item
    u = @item.update_attributes(item_params)
      if u
        render json: status: 201
      else
        render json: status: 422
      end
    end
  end

  def destroy
    @item = find_item
    @item.destroy
    render head: :no_content
    end
  end

  private

  def find_item
    Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :price, :description, :pic, :category)
  end
end
