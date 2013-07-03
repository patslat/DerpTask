class AddTopAndLeftToGroup < ActiveRecord::Migration
  def change
    add_column :groups, :top, :float
    add_column :groups, :left, :float
  end
end
