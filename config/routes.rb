Rails.application.routes.draw do
  resources :user_exercises
  resources :workout_exercises
  resources :workouts
  resources :exercises
  resources :users
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
