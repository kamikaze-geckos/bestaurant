require 'test_helper'

class ItemsControllerTest < ActionController::TestCase
  def setup
    @item = items(:one)
  end

  test "GET #index" do    
    get :index
    assert_equal [@item], assigns(:item)
    assert_response :success
  end
end