-- Typed models for the Anapioficeandfire SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Book
---@field authors? table
---@field characters? table
---@field country? string
---@field id? string
---@field isbn? string
---@field mediaType? string
---@field name? string
---@field numberOfPages? number
---@field povCharacters? table
---@field publisher? string
---@field released? string
---@field url? string

---@class BookLoadMatch
---@field id number

---@class BookListMatch
---@field authors? table
---@field characters? table
---@field country? string
---@field id? string
---@field isbn? string
---@field mediaType? string
---@field name? string
---@field numberOfPages? number
---@field povCharacters? table
---@field publisher? string
---@field released? string
---@field url? string

---@class Character
---@field aliases? table
---@field allegiances? table
---@field books? table
---@field born? string
---@field culture? string
---@field died? string
---@field father? string
---@field id? string
---@field mother? string
---@field name? string
---@field playedBy? table
---@field povBooks? table
---@field spouse? string
---@field titles? table
---@field tvSeries? table
---@field url? string

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch
---@field aliases? table
---@field allegiances? table
---@field books? table
---@field born? string
---@field culture? string
---@field died? string
---@field father? string
---@field id? string
---@field mother? string
---@field name? string
---@field playedBy? table
---@field povBooks? table
---@field spouse? string
---@field titles? table
---@field tvSeries? table
---@field url? string

---@class House
---@field ancestralWeapons? table
---@field cadetBranches? table
---@field coatOfArms? string
---@field currentLord? string
---@field diedOut? string
---@field founded? string
---@field founder? string
---@field heir? string
---@field id? string
---@field name? string
---@field overlord? string
---@field region? string
---@field seats? table
---@field swornMembers? table
---@field titles? table
---@field url? string
---@field words? string

---@class HouseLoadMatch
---@field id number

---@class HouseListMatch
---@field ancestralWeapons? table
---@field cadetBranches? table
---@field coatOfArms? string
---@field currentLord? string
---@field diedOut? string
---@field founded? string
---@field founder? string
---@field heir? string
---@field id? string
---@field name? string
---@field overlord? string
---@field region? string
---@field seats? table
---@field swornMembers? table
---@field titles? table
---@field url? string
---@field words? string

local M = {}

return M
