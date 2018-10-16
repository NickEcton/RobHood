Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :orders, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :portfolios, only: [:show]
    resources :assets, only: [:show]
  end
end
