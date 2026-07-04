-- Typed models for the Anapioficeandfire SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Book
---@field author? table
---@field character? table
---@field country? string
---@field isbn? string
---@field media_type? string
---@field name? string
---@field number_of_page? number
---@field pov_character? table
---@field publisher? string
---@field released? string
---@field url? string

---@class BookLoadMatch
---@field id number

---@class BookListMatch

---@class Character
---@field alias? table
---@field allegiance? table
---@field book? table
---@field born? string
---@field culture? string
---@field died? string
---@field father? string
---@field mother? string
---@field name? string
---@field played_by? table
---@field pov_book? table
---@field spouse? string
---@field title? table
---@field tv_series? table
---@field url? string

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch

---@class House
---@field ancestral_weapon? table
---@field cadet_branch? table
---@field coat_of_arm? string
---@field current_lord? string
---@field died_out? string
---@field founded? string
---@field founder? string
---@field heir? string
---@field name? string
---@field overlord? string
---@field region? string
---@field seat? table
---@field sworn_member? table
---@field title? table
---@field url? string
---@field word? string

---@class HouseLoadMatch
---@field id number

---@class HouseListMatch

local M = {}

return M
