DropTask::Application.routes.draw do

  root :to => 'root#root'

  resource :session, :only => [:new, :create]
  get '/logout' => 'sessions#logout'
  resources :users, :only => [:new, :create, :destroy]

  resources :projects do
    resources :groups, :only => [:create, :destroy]
    resources :tasks, :only => [:create, :destroy]
  end

end
