# == Schema Information
#
# Table name: snippets
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  language_id :integer          not null
#  title       :string           not null
#  body        :text             not null
#  views       :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  desc        :text             not null
#

class Snippet < ActiveRecord::Base
  validates :author_id, :language_id, :title, :body, presence: true
  validates :views, numericality: { only_integer: true }

  belongs_to(
    :author, 
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id)

  belongs_to(
    :language, 
    class_name: :Language,
    foreign_key: :language_id,
    primary_key: :id)

  has_many(
    :snippet_comments,
    dependent: :destroy,
    class_name: :SnippetComment,
    foreign_key: :snippet_id,
    primary_key: :id)

  has_many(
    :annotations,
    dependent: :destroy,
    class_name: :Annotation,
    foreign_key: :snippet_id,
    primary_key: :id)

  # has_many(
  #   :annotations,
  #   class_name: :Annotation,
  #   foreign_key: :snippet_id,
  #   primary_key: :id)

  def create_filename
    file_ext = {
      1 => "ada",
      2 => "bash",
      3 => "cs",
      4 => "cpp",
      5 => "clj",
      6 => "go",
      7 => "hs",
      8 => "html",
      9 => "java",
      10 => "js",
      11 => "php",
      12 => "pde",
      13 => "py",
      14 => "r",
      15 => "rb",
      16 => "sc",
      17 => "swift",
      18 => "ts"
    }

    "#{title}.#{file_ext[language_id]}"
  end

end
