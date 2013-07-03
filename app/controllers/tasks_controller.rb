class TasksController < ApplicationController
  respond_to :json
  before_filter :authorize_user

  def create
    @task = Project.find(params[:project_id]).tasks.build(params[:task])

    @task.save
    respond_with @task
  end

  def update
    @task = Task.find(params[:id])
    @task.update_attributes(params[:task])
    respond_with @task
  end
end
