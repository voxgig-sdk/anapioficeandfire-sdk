# Anapioficeandfire SDK utility: feature_add
module AnapioficeandfireUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
