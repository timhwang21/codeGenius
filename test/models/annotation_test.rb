# == Schema Information
#
# Table name: annotations
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  snippet_id :integer          not null
#  body       :text             not null
#  upvotes    :integer          default(0)
#  downvotes  :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  line_idx   :integer          not null
#

require 'test_helper'

class AnnotationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
