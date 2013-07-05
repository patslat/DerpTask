class Group < ActiveRecord::Base
  before_save :default_values
  attr_accessible :name, :project_id, :creator_id, :top, :left

  belongs_to :project

  has_many :tasks
  has_many :collaborations
  has_many :collaborators, :through => :collaborations

  def default_values
    self.left ||= rand * 1000
    self.top ||= rand * 1000
  end

end
