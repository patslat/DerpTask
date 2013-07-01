class ProjectsController < ApplicationController
  respond_to :html, :json
  before_filter :authorize_user

  def create
    @project = current_user.projects.build(params[:project])
    @project.save
    respond_with @project
  end

  def destroy
    @project = current_user.projects.where(:id => params[:id])
    if @project.destroy
      render :json => nil
    else
      render :json => @project, :status => :unprocessable_entity
    end
  end

  def index
    @projects = Project.where(creator_id: current_user.id)
      .includes(:groups, :tasks)

    respond_with @projects
  end

  def show
    @project = Project.where(id: params[:id])
                      .includes(
                        :groups, {:include => :tasks}
                      )
    render :json => @project
  end
end
