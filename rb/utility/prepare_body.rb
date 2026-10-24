# KokkaiKaigirokuApi SDK utility: prepare_body
require_relative 'media'
module KokkaiKaigirokuApiUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return KokkaiKaigirokuApiUtilities.raw_body(ctx.reqdata) if KokkaiKaigirokuApiUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
