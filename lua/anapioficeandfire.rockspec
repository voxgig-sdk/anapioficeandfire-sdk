package = "voxgig-sdk-anapioficeandfire"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/anapioficeandfire-sdk.git"
}
description = {
  summary = "Anapioficeandfire SDK for Lua",
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
    ["anapioficeandfire_sdk"] = "anapioficeandfire_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
