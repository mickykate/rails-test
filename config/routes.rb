Rails.application.routes.draw do
  devise_for :users
  resources :posts
  
  # ルートページをホームに設定
  root 'home#index'
end
