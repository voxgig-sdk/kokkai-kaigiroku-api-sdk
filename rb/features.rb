# KokkaiKaigirokuApi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module KokkaiKaigirokuApiFeatures
  def self.make_feature(name)
    case name
    when "base"
      KokkaiKaigirokuApiBaseFeature.new
    when "ratelimit"
      KokkaiKaigirokuApiRatelimitFeature.new
    when "retry"
      KokkaiKaigirokuApiRetryFeature.new
    when "test"
      KokkaiKaigirokuApiTestFeature.new
    when "timeout"
      KokkaiKaigirokuApiTimeoutFeature.new
    else
      KokkaiKaigirokuApiBaseFeature.new
    end
  end
end
