# frozen_string_literal: true

# Typed models for the Anapioficeandfire SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Book entity data model.
#
# @!attribute [rw] authors
#   @return [Array, nil]
#
# @!attribute [rw] characters
#   @return [Array, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] isbn
#   @return [String, nil]
#
# @!attribute [rw] mediaType
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] numberOfPages
#   @return [Integer, nil]
#
# @!attribute [rw] povCharacters
#   @return [Array, nil]
#
# @!attribute [rw] publisher
#   @return [String, nil]
#
# @!attribute [rw] released
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Book = Struct.new(
  :authors,
  :characters,
  :country,
  :id,
  :isbn,
  :mediaType,
  :name,
  :numberOfPages,
  :povCharacters,
  :publisher,
  :released,
  :url,
  keyword_init: true
)

# Request payload for Book#load.
#
# @!attribute [rw] id
#   @return [Integer]
BookLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Book#list.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
BookListMatch = Struct.new(
  :page,
  :page_size,
  keyword_init: true
)

# Character entity data model.
#
# @!attribute [rw] aliases
#   @return [Array, nil]
#
# @!attribute [rw] allegiances
#   @return [Array, nil]
#
# @!attribute [rw] books
#   @return [Array, nil]
#
# @!attribute [rw] born
#   @return [String, nil]
#
# @!attribute [rw] culture
#   @return [String, nil]
#
# @!attribute [rw] died
#   @return [String, nil]
#
# @!attribute [rw] father
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] mother
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] playedBy
#   @return [Array, nil]
#
# @!attribute [rw] povBooks
#   @return [Array, nil]
#
# @!attribute [rw] spouse
#   @return [String, nil]
#
# @!attribute [rw] titles
#   @return [Array, nil]
#
# @!attribute [rw] tvSeries
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Character = Struct.new(
  :aliases,
  :allegiances,
  :books,
  :born,
  :culture,
  :died,
  :father,
  :id,
  :mother,
  :name,
  :playedBy,
  :povBooks,
  :spouse,
  :titles,
  :tvSeries,
  :url,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [Integer]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] culture
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
CharacterListMatch = Struct.new(
  :culture,
  :name,
  :page,
  :page_size,
  keyword_init: true
)

# House entity data model.
#
# @!attribute [rw] ancestralWeapons
#   @return [Array, nil]
#
# @!attribute [rw] cadetBranches
#   @return [Array, nil]
#
# @!attribute [rw] coatOfArms
#   @return [String, nil]
#
# @!attribute [rw] currentLord
#   @return [String, nil]
#
# @!attribute [rw] diedOut
#   @return [String, nil]
#
# @!attribute [rw] founded
#   @return [String, nil]
#
# @!attribute [rw] founder
#   @return [String, nil]
#
# @!attribute [rw] heir
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overlord
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] seats
#   @return [Array, nil]
#
# @!attribute [rw] swornMembers
#   @return [Array, nil]
#
# @!attribute [rw] titles
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] words
#   @return [String, nil]
House = Struct.new(
  :ancestralWeapons,
  :cadetBranches,
  :coatOfArms,
  :currentLord,
  :diedOut,
  :founded,
  :founder,
  :heir,
  :id,
  :name,
  :overlord,
  :region,
  :seats,
  :swornMembers,
  :titles,
  :url,
  :words,
  keyword_init: true
)

# Request payload for House#load.
#
# @!attribute [rw] id
#   @return [Integer]
HouseLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for House#list.
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
HouseListMatch = Struct.new(
  :name,
  :page,
  :page_size,
  :region,
  keyword_init: true
)

