# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  get '/splash', to: 'pages#splash'
  get '/extras', to: 'pages#extras'
  get '/home', to: 'pages#home'

  root 'pages#splash'
end
