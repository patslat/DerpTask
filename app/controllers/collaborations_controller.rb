class CollaborationsController < ApplicationController
  respond_to :json

  def create
    @user = User.find_by_email(params[:collaboration][:email_address])

    @collaboration = @user.collaborations.create(
      :project_id => params[:collaboration][:project_id]
    )

    respond_with @collaboration
  end
end
