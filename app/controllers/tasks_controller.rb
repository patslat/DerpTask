class TasksController < ApplicationController
  before_filter :authorize_user

  def create
    @task = Project.find(params[:project_id]).tasks.build(params[:task])

    if @task.save
      render :json => @task
    else
      render :json => nil
    end
  end
end
