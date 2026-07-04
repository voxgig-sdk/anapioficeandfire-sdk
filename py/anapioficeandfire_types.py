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
    author: list
    character: list
    country: str
    isbn: str
    media_type: str
    name: str
    number_of_page: int
    pov_character: list
    publisher: str
    released: str
    url: str


class BookLoadMatch(TypedDict):
    id: int


class BookListMatch(TypedDict, total=False):
    author: list
    character: list
    country: str
    isbn: str
    media_type: str
    name: str
    number_of_page: int
    pov_character: list
    publisher: str
    released: str
    url: str


class Character(TypedDict, total=False):
    alias: list
    allegiance: list
    book: list
    born: str
    culture: str
    died: str
    father: str
    mother: str
    name: str
    played_by: list
    pov_book: list
    spouse: str
    title: list
    tv_series: list
    url: str


class CharacterLoadMatch(TypedDict):
    id: int


class CharacterListMatch(TypedDict, total=False):
    alias: list
    allegiance: list
    book: list
    born: str
    culture: str
    died: str
    father: str
    mother: str
    name: str
    played_by: list
    pov_book: list
    spouse: str
    title: list
    tv_series: list
    url: str


class House(TypedDict, total=False):
    ancestral_weapon: list
    cadet_branch: list
    coat_of_arm: str
    current_lord: str
    died_out: str
    founded: str
    founder: str
    heir: str
    name: str
    overlord: str
    region: str
    seat: list
    sworn_member: list
    title: list
    url: str
    word: str


class HouseLoadMatch(TypedDict):
    id: int


class HouseListMatch(TypedDict, total=False):
    ancestral_weapon: list
    cadet_branch: list
    coat_of_arm: str
    current_lord: str
    died_out: str
    founded: str
    founder: str
    heir: str
    name: str
    overlord: str
    region: str
    seat: list
    sworn_member: list
    title: list
    url: str
    word: str
