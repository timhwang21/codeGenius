Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :show, :destroy]
  resource :session, only: [:new, :create, :destroy]  

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update, :destroy]

    resources :languages, only: [:index, :show, :create, :destroy] do
      resources :snippets, only: [:index]
    end

    resources :snippets, only: [:index, :create, :show, :update, :destroy] do 
      resources :snippet_comments, only: [:index, :create] # get user id from current_user
      resources :annotations, only: [:index]
    end

    resources :snippet_comments, only: [:show, :update, :destroy] 
    resources :annotations, only: [:create, :show, :update, :destroy] 
  end
end
