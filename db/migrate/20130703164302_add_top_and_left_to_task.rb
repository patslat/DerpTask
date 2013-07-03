class AddTopAndLeftToTask < ActiveRecord::Migration
  def change
    add_column :tasks, :top, :float
    add_column :tasks, :left, :float
  end
end
