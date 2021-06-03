Rails.application.routes.draw do
  resources :tokens, only: [:create]
  #get 'token/create'
  #get 'chat/index'
  #get 'layout/application'
  root to: 'chat#show'
end
