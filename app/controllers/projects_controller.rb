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

  def destroy
    @project = current_user.projects.where(:id => params[:id])
    if @project.destroy
      render :json => nil
    else
      render :json => nil # TODO: raise error
    end
  end

  def index
    @projects = Project.where(creator_id: current_user.id)
      .includes(:groups, :tasks)

    render :json => @projects
  end

  def show
    @project = Project.where(id: params[:id]).includes(:groups, :tasks)
    render :json => @project
  end
end
