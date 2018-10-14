class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

  has_one :portfolio,
  foreign_key: :user_id,
  class_name: :Portfolio

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    @user && @user.is_password?(password) ? @user : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

end
