class UsersController < ApplicationController

  def create
    @user = User.new(params[:user])
    if @user.save
      session[:token] = @user.session_token
      redirect_to root_url
    else
      render :new
    end
  end

  def new
    @user = User.new
  end

end
