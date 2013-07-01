class Task < ActiveRecord::Base
  attr_accessible :title, :status, :priority, :effort, :description, :creator_id

  belongs_to :group
end
