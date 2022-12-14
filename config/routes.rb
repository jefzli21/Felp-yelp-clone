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
    resources :businesses, only: [:show, :create, :index]
    resources :reviews, only: [:index,:create, :update, :destroy, :show]

    get '/search/:query' , to: "businesses#search"
    
  end

  # get `/api/businesses?query`

  
  get '*path', to: "static_pages#frontend_index"

end
