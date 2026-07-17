-- KokkaiKaigirokuApi SDK exists test

local sdk = require("kokkai-kaigiroku-api_sdk")

describe("KokkaiKaigirokuApiSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
