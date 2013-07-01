class Collaboration < ActiveRecord::Base
  attr_accessible :collaborator_id, :group_id

  belongs_to :collaborator,
             :class_name => 'User'
  belongs_to :group
end
