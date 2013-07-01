class SessionsController < ApplicationController
  before_filter :authorize_user, :only => [:destroy]

  def create
    @user = User.find_by_username(params[:username])
    if @user.authenticate_password(params[:password])
      session[:token] = @user.generate_session_token!
      redirect_to root_url
    else
      flash[:notice] = "Invalid username or password."
      render :new
    end
  end

  def destroy
    @user = current_user
    @user.session_token = nil
    @user.save
    session[:token] = nil
    redirect_to root_url
  end
end
