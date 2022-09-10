Rails.application.routes.draw do
  namespace :api do
    get 'businesses/create'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :businesses, only: [:show, :create]
    resources :reviews, only: [:create, :update, :destroy]
  end

  

  
  get '*path', to: "static_pages#frontend_index"

end
