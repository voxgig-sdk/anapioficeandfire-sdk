# Anapioficeandfire SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module AnapioficeandfireFeatures
  def self.make_feature(name)
    case name
    when "base"
      AnapioficeandfireBaseFeature.new
    when "test"
      AnapioficeandfireTestFeature.new
    else
      AnapioficeandfireBaseFeature.new
    end
  end
end
