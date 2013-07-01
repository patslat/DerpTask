class Project < ActiveRecord::Base
  attr_accessible :name, :creator_id

  has_many :groups

  belongs_to :creator,
             :class => 'User'
end
