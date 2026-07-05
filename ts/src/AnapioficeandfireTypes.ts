// Typed models for the Anapioficeandfire SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Book {
  author?: any[]
  character?: any[]
  country?: string
  isbn?: string
  media_type?: string
  name?: string
  number_of_page?: number
  pov_character?: any[]
  publisher?: string
  released?: string
  url?: string
}

export interface BookLoadMatch {
  id: number
}

export interface BookListMatch {
  author?: any[]
  character?: any[]
  country?: string
  isbn?: string
  media_type?: string
  name?: string
  number_of_page?: number
  pov_character?: any[]
  publisher?: string
  released?: string
  url?: string
}

export interface Character {
  alias?: any[]
  allegiance?: any[]
  book?: any[]
  born?: string
  culture?: string
  died?: string
  father?: string
  mother?: string
  name?: string
  played_by?: any[]
  pov_book?: any[]
  spouse?: string
  title?: any[]
  tv_series?: any[]
  url?: string
}

export interface CharacterLoadMatch {
  id: number
}

export interface CharacterListMatch {
  alias?: any[]
  allegiance?: any[]
  book?: any[]
  born?: string
  culture?: string
  died?: string
  father?: string
  mother?: string
  name?: string
  played_by?: any[]
  pov_book?: any[]
  spouse?: string
  title?: any[]
  tv_series?: any[]
  url?: string
}

export interface House {
  ancestral_weapon?: any[]
  cadet_branch?: any[]
  coat_of_arm?: string
  current_lord?: string
  died_out?: string
  founded?: string
  founder?: string
  heir?: string
  name?: string
  overlord?: string
  region?: string
  seat?: any[]
  sworn_member?: any[]
  title?: any[]
  url?: string
  word?: string
}

export interface HouseLoadMatch {
  id: number
}

export interface HouseListMatch {
  ancestral_weapon?: any[]
  cadet_branch?: any[]
  coat_of_arm?: string
  current_lord?: string
  died_out?: string
  founded?: string
  founder?: string
  heir?: string
  name?: string
  overlord?: string
  region?: string
  seat?: any[]
  sworn_member?: any[]
  title?: any[]
  url?: string
  word?: string
}

