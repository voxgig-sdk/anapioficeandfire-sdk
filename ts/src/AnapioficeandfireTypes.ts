// Typed models for the Anapioficeandfire SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Book {
  authors?: any[]
  characters?: any[]
  country?: string
  isbn?: string
  mediaType?: string
  name?: string
  numberOfPages?: number
  povCharacters?: any[]
  publisher?: string
  released?: string
  url?: string
}

export interface BookLoadMatch {
  id: number
}

export interface BookListMatch {
  authors?: any[]
  characters?: any[]
  country?: string
  isbn?: string
  mediaType?: string
  name?: string
  numberOfPages?: number
  povCharacters?: any[]
  publisher?: string
  released?: string
  url?: string
}

export interface Character {
  aliases?: any[]
  allegiances?: any[]
  books?: any[]
  born?: string
  culture?: string
  died?: string
  father?: string
  mother?: string
  name?: string
  playedBy?: any[]
  povBooks?: any[]
  spouse?: string
  titles?: any[]
  tvSeries?: any[]
  url?: string
}

export interface CharacterLoadMatch {
  id: number
}

export interface CharacterListMatch {
  aliases?: any[]
  allegiances?: any[]
  books?: any[]
  born?: string
  culture?: string
  died?: string
  father?: string
  mother?: string
  name?: string
  playedBy?: any[]
  povBooks?: any[]
  spouse?: string
  titles?: any[]
  tvSeries?: any[]
  url?: string
}

export interface House {
  ancestralWeapons?: any[]
  cadetBranches?: any[]
  coatOfArms?: string
  currentLord?: string
  diedOut?: string
  founded?: string
  founder?: string
  heir?: string
  name?: string
  overlord?: string
  region?: string
  seats?: any[]
  swornMembers?: any[]
  titles?: any[]
  url?: string
  words?: string
}

export interface HouseLoadMatch {
  id: number
}

export interface HouseListMatch {
  ancestralWeapons?: any[]
  cadetBranches?: any[]
  coatOfArms?: string
  currentLord?: string
  diedOut?: string
  founded?: string
  founder?: string
  heir?: string
  name?: string
  overlord?: string
  region?: string
  seats?: any[]
  swornMembers?: any[]
  titles?: any[]
  url?: string
  words?: string
}

