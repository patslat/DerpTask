class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|

      t.string :title, :null => false
      t.string :status, :null => false
      t.string :priority, :null => false
      t.string :effort, :null => false
      t.text :description
      t.integer :creator_id

      t.timestamps
    end
  end
end
