# Anapioficeandfire SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module AnapioficeandfireFeatures
  def self.make_feature(name)
    case name
    when "base"
      AnapioficeandfireBaseFeature.new
    when "ratelimit"
      AnapioficeandfireRatelimitFeature.new
    when "retry"
      AnapioficeandfireRetryFeature.new
    when "test"
      AnapioficeandfireTestFeature.new
    when "timeout"
      AnapioficeandfireTimeoutFeature.new
    else
      AnapioficeandfireBaseFeature.new
    end
  end
end
