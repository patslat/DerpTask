class User < ActiveRecord::Base

  require 'bcrypt'

  attr_accessible :email, :password, :username

  has_many :projects, :foreign_key => :creator_id
  has_many :collaborations, :foreign_key => :collaborator_id
  has_many :collaboration_projects,
    :through => :collaborations,
    :source => :project


  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def authenticate_password(password)
    BCrypt::Password.new(password_digest) == password
  end

  def set_session_token!
    self.session_token = SecureRandom::urlsafe_base64(32)
    save
    return self.session_token
  end
end
