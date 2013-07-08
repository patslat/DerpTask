DropTask::Application.routes.draw do

  root :to => 'projects#index'

  resource :session, :only => [:new, :create]
  get '/logout' => 'sessions#logout'
  resources :users, :only => [:new, :create, :destroy]
  resources :groups, :only => [:create, :destroy, :update]
  resources :tasks, :only => [:create, :destroy, :update]
  resources :projects do
    resources :collaborations, :only => [:create, :destroy]
    resources :groups, :only => [:create, :destroy]
    resources :tasks, :only => [:create, :destroy]
  end

end
