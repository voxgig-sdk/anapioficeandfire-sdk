# Typed models for the Anapioficeandfire SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Book(TypedDict, total=False):
    authors: list
    characters: list
    country: str
    id: str
    isbn: str
    mediaType: str
    name: str
    numberOfPages: int
    povCharacters: list
    publisher: str
    released: str
    url: str


class BookLoadMatch(TypedDict):
    id: int


class BookListMatch(TypedDict, total=False):
    authors: list
    characters: list
    country: str
    id: str
    isbn: str
    mediaType: str
    name: str
    numberOfPages: int
    povCharacters: list
    publisher: str
    released: str
    url: str


class Character(TypedDict, total=False):
    aliases: list
    allegiances: list
    books: list
    born: str
    culture: str
    died: str
    father: str
    id: str
    mother: str
    name: str
    playedBy: list
    povBooks: list
    spouse: str
    titles: list
    tvSeries: list
    url: str


class CharacterLoadMatch(TypedDict):
    id: int


class CharacterListMatch(TypedDict, total=False):
    aliases: list
    allegiances: list
    books: list
    born: str
    culture: str
    died: str
    father: str
    id: str
    mother: str
    name: str
    playedBy: list
    povBooks: list
    spouse: str
    titles: list
    tvSeries: list
    url: str


class House(TypedDict, total=False):
    ancestralWeapons: list
    cadetBranches: list
    coatOfArms: str
    currentLord: str
    diedOut: str
    founded: str
    founder: str
    heir: str
    id: str
    name: str
    overlord: str
    region: str
    seats: list
    swornMembers: list
    titles: list
    url: str
    words: str


class HouseLoadMatch(TypedDict):
    id: int


class HouseListMatch(TypedDict, total=False):
    ancestralWeapons: list
    cadetBranches: list
    coatOfArms: str
    currentLord: str
    diedOut: str
    founded: str
    founder: str
    heir: str
    id: str
    name: str
    overlord: str
    region: str
    seats: list
    swornMembers: list
    titles: list
    url: str
    words: str
