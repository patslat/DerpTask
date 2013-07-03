class GroupsController < ApplicationController
  respond_to :json
  before_filter :authorize_user

  def create
    @project = Project.find(params[:group][:project_id]) ||
               Project.find(params[:project_id])
    @group = @project.groups.build(params[:group])

    @group.save
    respond_with @group
  end

  def update
    @group = Group.find(params[:id])
    @group.update_attributes(params[:group])
    respond_with @group
  end
end
