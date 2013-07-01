class Project < ActiveRecord::Base
  attr_accessible :name, :creator_id

  has_many :groups
  has_many :tasks, :through => :groups

  belongs_to :creator, :class_name => "User"
end
