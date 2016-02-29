# == Schema Information
#
# Table name: annotations
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  snippet_id :integer          not null
#  body       :text             not null
#  start_idx  :integer          not null
#  end_idx    :integer          not null
#  upvotes    :integer          default(0)
#  downvotes  :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Annotation < ActiveRecord::Base
  validates :author_id, :snippet_id, :body, :line_idx, presence: true
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

  # has_many(
  #   :annotation_comments,
  #   class_name: :AnnotationComment,
  #   foreign_key: :annotation_id,
  #   primary_key: :id)
end
