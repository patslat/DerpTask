class Collaboration < ActiveRecord::Base
  attr_accessible :collaborator_id, :project_id, :email_address

  belongs_to :collaborator,
             :class_name => 'User'
  belongs_to :project
end
