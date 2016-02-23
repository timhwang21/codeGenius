# == Schema Information
#
# Table name: snippets
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  language_id :integer          not null
#  title       :string           not null
#  image_url   :string
#  body        :text             not null
#  views       :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class SnippetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
