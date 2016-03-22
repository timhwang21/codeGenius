# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  image_url       :string           default("codegenius-logo.png")
#  body            :text
#  iq              :integer          default(0)
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :iq, numericality: { only_integer: true }

  attr_reader :password

  has_many(
    :snippets,
    dependent: :destroy,
    class_name: :Snippet, 
    foreign_key: :author_id,
    primary_key: :id)

  has_many(
    :snippet_comments,
    dependent: :destroy,
    class_name: :SnippetComment, 
    foreign_key: :author_id,
    primary_key: :id)

  has_many(
    :annotations,
    dependent: :destroy,
    class_name: :Annotation, 
    foreign_key: :author_id,
    primary_key: :id)

  # has_many(
  #   :annotation_comments,
  #   class_name: :AnnotationComment, 
  #   foreign_key: :author_id,
  #   primary_key: :id)

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    (user && user.valid_password?(password)) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
