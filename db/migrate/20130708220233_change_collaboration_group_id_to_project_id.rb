class ChangeCollaborationGroupIdToProjectId < ActiveRecord::Migration
  def change
    remove_column :collaborations, :group_id
    add_column :collaborations, :project_id, :integer
  end
end
