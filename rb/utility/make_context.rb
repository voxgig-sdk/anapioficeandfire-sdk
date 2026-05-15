# Anapioficeandfire SDK utility: make_context
require_relative '../core/context'
module AnapioficeandfireUtilities
  MakeContext = ->(ctxmap, basectx) {
    AnapioficeandfireContext.new(ctxmap, basectx)
  }
end
