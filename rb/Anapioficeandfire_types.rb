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
# @!attribute [rw] author
#   @return [Array, nil]
#
# @!attribute [rw] character
#   @return [Array, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] isbn
#   @return [String, nil]
#
# @!attribute [rw] media_type
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number_of_page
#   @return [Integer, nil]
#
# @!attribute [rw] pov_character
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
  :author,
  :character,
  :country,
  :isbn,
  :media_type,
  :name,
  :number_of_page,
  :pov_character,
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

# Match filter for Book#list (any subset of Book fields).
#
# @!attribute [rw] author
#   @return [Array, nil]
#
# @!attribute [rw] character
#   @return [Array, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] isbn
#   @return [String, nil]
#
# @!attribute [rw] media_type
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number_of_page
#   @return [Integer, nil]
#
# @!attribute [rw] pov_character
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
BookListMatch = Struct.new(
  :author,
  :character,
  :country,
  :isbn,
  :media_type,
  :name,
  :number_of_page,
  :pov_character,
  :publisher,
  :released,
  :url,
  keyword_init: true
)

# Character entity data model.
#
# @!attribute [rw] alias
#   @return [Array, nil]
#
# @!attribute [rw] allegiance
#   @return [Array, nil]
#
# @!attribute [rw] book
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
# @!attribute [rw] mother
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] played_by
#   @return [Array, nil]
#
# @!attribute [rw] pov_book
#   @return [Array, nil]
#
# @!attribute [rw] spouse
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [Array, nil]
#
# @!attribute [rw] tv_series
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Character = Struct.new(
  :alias,
  :allegiance,
  :book,
  :born,
  :culture,
  :died,
  :father,
  :mother,
  :name,
  :played_by,
  :pov_book,
  :spouse,
  :title,
  :tv_series,
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

# Match filter for Character#list (any subset of Character fields).
#
# @!attribute [rw] alias
#   @return [Array, nil]
#
# @!attribute [rw] allegiance
#   @return [Array, nil]
#
# @!attribute [rw] book
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
# @!attribute [rw] mother
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] played_by
#   @return [Array, nil]
#
# @!attribute [rw] pov_book
#   @return [Array, nil]
#
# @!attribute [rw] spouse
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [Array, nil]
#
# @!attribute [rw] tv_series
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :alias,
  :allegiance,
  :book,
  :born,
  :culture,
  :died,
  :father,
  :mother,
  :name,
  :played_by,
  :pov_book,
  :spouse,
  :title,
  :tv_series,
  :url,
  keyword_init: true
)

# House entity data model.
#
# @!attribute [rw] ancestral_weapon
#   @return [Array, nil]
#
# @!attribute [rw] cadet_branch
#   @return [Array, nil]
#
# @!attribute [rw] coat_of_arm
#   @return [String, nil]
#
# @!attribute [rw] current_lord
#   @return [String, nil]
#
# @!attribute [rw] died_out
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
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overlord
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] seat
#   @return [Array, nil]
#
# @!attribute [rw] sworn_member
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] word
#   @return [String, nil]
House = Struct.new(
  :ancestral_weapon,
  :cadet_branch,
  :coat_of_arm,
  :current_lord,
  :died_out,
  :founded,
  :founder,
  :heir,
  :name,
  :overlord,
  :region,
  :seat,
  :sworn_member,
  :title,
  :url,
  :word,
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

# Match filter for House#list (any subset of House fields).
#
# @!attribute [rw] ancestral_weapon
#   @return [Array, nil]
#
# @!attribute [rw] cadet_branch
#   @return [Array, nil]
#
# @!attribute [rw] coat_of_arm
#   @return [String, nil]
#
# @!attribute [rw] current_lord
#   @return [String, nil]
#
# @!attribute [rw] died_out
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
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overlord
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] seat
#   @return [Array, nil]
#
# @!attribute [rw] sworn_member
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] word
#   @return [String, nil]
HouseListMatch = Struct.new(
  :ancestral_weapon,
  :cadet_branch,
  :coat_of_arm,
  :current_lord,
  :died_out,
  :founded,
  :founder,
  :heir,
  :name,
  :overlord,
  :region,
  :seat,
  :sworn_member,
  :title,
  :url,
  :word,
  keyword_init: true
)

