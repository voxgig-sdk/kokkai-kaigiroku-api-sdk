-- KokkaiKaigirokuApi SDK error

local KokkaiKaigirokuApiError = {}
KokkaiKaigirokuApiError.__index = KokkaiKaigirokuApiError


function KokkaiKaigirokuApiError.new(code, msg, ctx)
  local self = setmetatable({}, KokkaiKaigirokuApiError)
  self.is_sdk_error = true
  self.sdk = "KokkaiKaigirokuApi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function KokkaiKaigirokuApiError:error()
  return self.msg
end


function KokkaiKaigirokuApiError:__tostring()
  return self.msg
end


return KokkaiKaigirokuApiError
