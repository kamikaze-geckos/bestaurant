Rails.application.routes.draw do
  namespace :api do
    with_options except: [:new, :edit] do |r|
      r.resources :items
      r.resources :restaurants
      r.resources :menus
    end
  end
end
