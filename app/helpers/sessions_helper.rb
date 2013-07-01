module SessionsHelper

  def current_user
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def logged_in?
    !!current_user
  end

  def authorize_user
    redirect_to new_session_url unless logged_in?
  end
end