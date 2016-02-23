Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :show, :destroy]
  resource :session, only: [:new, :create, :destroy]  

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update, :destroy]

    resources :languages, only: [:index, :show, :create, :destroy] do
      resources :snippets, only: [:create, :show]
    end

     # resources :snippets, only: [:show, :update, :destroy] do # TODO: final
    resources :snippets, only: [:index, :show, :update, :destroy] do # TODO: remove :index; accessible through language tabs Retained for testing
      resources :snippet_comments, only: [:create] # get user id from current_user
      resources :annotations, only: [:create]
    end

    # resources :snippet_comments, only: [:update, :destroy] # TODO: final route
    # resources :annotations, only: [:update, :destroy] # TODO: this is the "correct" one
    resources :snippet_comments, only: [:index, :show, :update, :destroy] # TODO: testing resource
    resources :annotations, only: [:index, :show, :update, :destroy] # TODO: testing resource
  end
end
