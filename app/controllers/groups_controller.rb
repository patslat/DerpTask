class GroupsController < ApplicationController
  respond_to :json
  before_filter :authorize_user

  def create
    @group = Project.find(params[:project_id]).groups.build(params[group])

    @group.save
    respond_with @group
  end

  def update
    @group = Group.find(params[:id])
    @group.update_attributes(params[:group])
    respond_with @group
  end
end
