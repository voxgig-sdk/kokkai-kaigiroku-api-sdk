# KokkaiKaigirokuApi SDK utility: feature_add
module KokkaiKaigirokuApiUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
