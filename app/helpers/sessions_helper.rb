module SessionsHelper

  def current_user
    if session[:token]
      @current_user ||= User.find_by_session_token(session[:token])
    else
      false
    end
  end

  def logged_in?
    !!current_user
  end

  def authorize_user
    redirect_to new_session_url unless logged_in?
  end
end