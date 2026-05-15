package = "voxgig-sdk-kokkai-kaigiroku-api"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk.git"
}
description = {
  summary = "KokkaiKaigirokuApi SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["kokkai-kaigiroku-api_sdk"] = "kokkai-kaigiroku-api_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
