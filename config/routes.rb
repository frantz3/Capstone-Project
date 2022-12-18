Rails.application.routes.draw do
  resources :calcs

  resources :workouts, only: [:index, :show, :update, :create]
  resources :exercises
  # resources :users
 
 get '/calculator', to: 'calcs#create'
  post '/workouts', to:  "workouts#create"
  delete '/workouts/:name', to: 'workouts#destroy'
  get '/me', to:  "users#show"
  post '/signup', to: 'users#create'

  post '/add-exercise', to: 'workouts#add_exercise'

  # get '/exercises', to: "exercises#index"


  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
