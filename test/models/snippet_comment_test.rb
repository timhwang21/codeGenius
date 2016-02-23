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

require 'test_helper'

class SnippetCommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
