# == Schema Information
#
# Table name: languages
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Language < ActiveRecord::Base
  validates :name, presence: true

  has_many(
    :snippets,
    class_name: :Snippet,
    foreign_key: :language_id,
    primary_key: :id)

end
