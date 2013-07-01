class GroupsController < ApplicationController
  before_filter :authorize_user

  def create
    @group = Project.find(params[:project_id]).groups.build(params[group])
    if @group.save
      render :json => @group
    else
      render :json => nil #TODO raise error
    end
  end
end
