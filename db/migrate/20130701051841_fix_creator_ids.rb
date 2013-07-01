class FixCreatorIds < ActiveRecord::Migration
  def change
    remove_column :projects, :creator_id
    remove_column :users, :creator_id
    add_column :projects, :creator_id, :integer
  end
end
