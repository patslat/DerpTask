class Group < ActiveRecord::Base
  attr_accessible :name, :project_id, :creator_id, :top, :left

  belongs_to :project

  has_many :tasks
  has_many :collaborations
  has_many :collaborators, :through => :collaborations

end
