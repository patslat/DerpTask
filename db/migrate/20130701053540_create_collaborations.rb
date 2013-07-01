class CreateCollaborations < ActiveRecord::Migration
  def change
    create_table :collaborations do |t|
      t.integer :group_id, :null => false
      t.integer :collaborator_id, :null => false

      t.timestamps
    end
  end
end
