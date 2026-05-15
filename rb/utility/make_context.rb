# KokkaiKaigirokuApi SDK utility: make_context
require_relative '../core/context'
module KokkaiKaigirokuApiUtilities
  MakeContext = ->(ctxmap, basectx) {
    KokkaiKaigirokuApiContext.new(ctxmap, basectx)
  }
end
