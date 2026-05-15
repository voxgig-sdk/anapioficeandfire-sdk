-- Anapioficeandfire SDK error

local AnapioficeandfireError = {}
AnapioficeandfireError.__index = AnapioficeandfireError


function AnapioficeandfireError.new(code, msg, ctx)
  local self = setmetatable({}, AnapioficeandfireError)
  self.is_sdk_error = true
  self.sdk = "Anapioficeandfire"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function AnapioficeandfireError:error()
  return self.msg
end


function AnapioficeandfireError:__tostring()
  return self.msg
end


return AnapioficeandfireError
