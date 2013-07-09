class CollaborationsController < ApplicationController
  respond_to :json
  before_filter :authorize_user

  def create
    @user = User.find_by_email(params[:collaboration][:email_address])

    @collaboration = @user.collaborations.create(
      :project_id => params[:collaboration][:project_id]
    )

    respond_with @collaboration
  end
end
