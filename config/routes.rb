Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/comments/:comment_id/songs/:id', to: 'songs#add_comment'
  resources :comments, only: [:index, :show, :create]
  resources :songs
  resources :users, only: :create
  
end
