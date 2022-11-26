Rails.application.routes.draw do

  resources :workouts
  resources :exercises
  # resources :users
 

  get '/me', to:  "users#index"
  post '/signup', to: 'users#create'

  # get '/exercises', to: "exercises#index"


  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
