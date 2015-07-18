Rails.application.routes.draw do
  resources :widgets

  root 'welcome#index'

    namespace :api do
    with_options except: [:new, :edit] do |r|
      r.resources :items
      r.resources :restaurants
      r.resources :menus
    end
  end
end
