class Task < ActiveRecord::Base
  before_save :default_values
  attr_accessible :title, :status, :priority, :effort,
    :description, :group_id, :creator_id, :due_date,
    :top, :left

  validates :status, :inclusion => [
    "Not Started", "In Progress","On Hold", "Completed"
  ]

  validates :priority, :inclusion => ["Very High", "High", "None"]

  validates :effort, :inclusion => ["Large", "Medium", "Small"]

  belongs_to :group

  def default_values
    self.left ||= rand * 450
    self.top ||= rand * 450
  end
end
