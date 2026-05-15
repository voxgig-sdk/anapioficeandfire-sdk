-- ProjectName SDK exists test

local sdk = require("anapioficeandfire_sdk")

describe("AnapioficeandfireSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
