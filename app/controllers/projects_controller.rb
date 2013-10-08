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
    # might be better to do Projects.for_user(current_user)
    @projects = current_user.projects
                            .with_groups
                            .with_tasks

    @projects += current_user.collaboration_projects

    respond_with @projects
  end

  def show
    @project = Project.where(id: params[:id])
                      .includes(
                        :groups, {:include => :tasks}
                      )
    respond_with @project
  end
end
