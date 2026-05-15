# KokkaiKaigirokuApi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module KokkaiKaigirokuApiFeatures
  def self.make_feature(name)
    case name
    when "base"
      KokkaiKaigirokuApiBaseFeature.new
    when "test"
      KokkaiKaigirokuApiTestFeature.new
    else
      KokkaiKaigirokuApiBaseFeature.new
    end
  end
end
