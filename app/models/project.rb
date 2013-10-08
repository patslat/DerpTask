class Project < ActiveRecord::Base
  attr_accessible :name, :creator_id

  has_many :groups
  has_many :tasks, :through => :groups

  belongs_to :creator, :class_name => "User"
  # this works too, but I'd rather explicitly include them
  #default_scope includes(:groups, :tasks)

  scope :with_groups, includes(:groups)
  scope :with_tasks, includes(:tasks)

  def as_json(options = {})
    super(options.merge(
      :include =>
        {:groups =>
          {:include => :tasks}
        }
    ))
  end

end
