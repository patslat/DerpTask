class Group < ActiveRecord::Base
  attr_accessible :name, :project_id

  belongs_to :project
  has_many :tasks
  has_many :collaborations
  has_many :collaborators, :through => :collaborations

end
