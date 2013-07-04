class TasksController < ApplicationController
  respond_to :json
  before_filter :authorize_user

  def create
    group_id = params[:group_id] || params[:task][:group_id]
    @group = Group.find(group_id)

    @task = @group.tasks.build(params[:task])

    @task.creator_id = current_user.id

    @task.save
    respond_with @task
  end

  def update
    @task = Task.find(params[:id])
    @task.update_attributes(params[:task])
    respond_with @task
  end
end
