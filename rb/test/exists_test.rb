# Anapioficeandfire SDK exists test

require "minitest/autorun"
require_relative "../Anapioficeandfire_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = AnapioficeandfireSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
