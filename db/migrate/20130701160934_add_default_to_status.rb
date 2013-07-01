class AddDefaultToStatus < ActiveRecord::Migration
  def change
    remove_column :tasks, :status
    add_column :tasks, :status, :string, :default => true
  end
end
