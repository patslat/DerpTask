class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name, :null => false
      t.integer :project_id, :null => false

      t.timestamps
    end
  end
end
