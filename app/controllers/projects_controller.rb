class ProjectsController < ApplicationController

  before_filter :authorize_user

  def create
    @project = current_user.projects.build(params[:project])
    if @project.save
      render :json => @project
    else
      render :json => @project
    end
  end

  def index
    @projects = Project.where(creator_id: current_user.id)
      .includes(:groups, :tasks)

    render :json => @projects.to_json(:include => [:groups, :tasks])
  end
end
