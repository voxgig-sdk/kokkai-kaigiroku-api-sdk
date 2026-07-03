package = "voxgig-sdk-kokkai-kaigiroku-api"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk.git",
  tag = "lua/v0.0.1",
  dir = "kokkai-kaigiroku-api-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the 国会会議録検索 public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk",
  issues_url = "https://github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "kokkai-kaigiroku-api" }
}
dependencies = {
  "lua >= 5.3",
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
