# == Schema Information
#
# Table name: snippet_comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  snippet_id :integer          not null
#  body       :text             not null
#  upvotes    :integer          default(0)
#  downvotes  :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SnippetComment < ActiveRecord::Base
  validates :author_id, :snippet_id, :body, presence: true
  validates :upvotes, :downvotes, numericality: { only_integer: true }

  belongs_to(
    :author, 
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id)

  belongs_to(
    :snippet, 
    class_name: :Snippet,
    foreign_key: :snippet_id,
    primary_key: :id)

end
