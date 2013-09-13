class AddOrderToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :order, :float
  end
end
