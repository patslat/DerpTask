class Task < ActiveRecord::Base
  attr_accessible :title, :status, :priority, :effort,
    :description, :group_id, :creator_id, :top, :left

  validates :status, :inclusion => [
    "Not Started", "In Progress","On Hold", "Completed"
  ]

  validates :priority, :inclusion => ["Very High", "High", "None"]

  validates :effort, :inclusion => ["Large", "Medium", "Small"]

  belongs_to :group
end
