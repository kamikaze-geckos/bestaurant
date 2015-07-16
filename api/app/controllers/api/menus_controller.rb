class menusController < ApplicationController
  respond_to :json

  def index
    @menus = Menuall
    render json: @menus
  end

  def show
    @menu = find_menu
    render json: @menus
  end

  def create
    @menu = Menunew(menu_params)
      if @menu.save
        render  status: :created, location: nil
      else
        render json: @menu.errors, status: 422
    end
  end

  def update
    @menu = find_menu
    u = @menu.update_attributes(menu_params)
      if u
        render json: :index
      else
        render json: :edit
      end
    end
  end

  def destroy
    @menu = find_menu
    @menu.destroy
    render head: :no_content
    end
  end

  private

  def find_menu
    Menufind(params[:id])
  end

  def menu_params
    params.require(:menu).permit(:restaurant_id, :item_id)
  end
end
