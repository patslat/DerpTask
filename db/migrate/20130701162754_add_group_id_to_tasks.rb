class AddGroupIdToTasks < ActiveRecord::Migration
  def change

    remove_column :tasks, :creator_id

    add_column :tasks, :group_id, :integer
    add_column :tasks, :creator_id, :integer
  end
end
