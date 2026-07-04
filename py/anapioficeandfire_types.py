# Typed models for the Anapioficeandfire SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Book:
    author: Optional[list] = None
    character: Optional[list] = None
    country: Optional[str] = None
    isbn: Optional[str] = None
    media_type: Optional[str] = None
    name: Optional[str] = None
    number_of_page: Optional[int] = None
    pov_character: Optional[list] = None
    publisher: Optional[str] = None
    released: Optional[str] = None
    url: Optional[str] = None


@dataclass
class BookLoadMatch:
    id: int


@dataclass
class BookListMatch:
    author: Optional[list] = None
    character: Optional[list] = None
    country: Optional[str] = None
    isbn: Optional[str] = None
    media_type: Optional[str] = None
    name: Optional[str] = None
    number_of_page: Optional[int] = None
    pov_character: Optional[list] = None
    publisher: Optional[str] = None
    released: Optional[str] = None
    url: Optional[str] = None


@dataclass
class Character:
    alias: Optional[list] = None
    allegiance: Optional[list] = None
    book: Optional[list] = None
    born: Optional[str] = None
    culture: Optional[str] = None
    died: Optional[str] = None
    father: Optional[str] = None
    mother: Optional[str] = None
    name: Optional[str] = None
    played_by: Optional[list] = None
    pov_book: Optional[list] = None
    spouse: Optional[str] = None
    title: Optional[list] = None
    tv_series: Optional[list] = None
    url: Optional[str] = None


@dataclass
class CharacterLoadMatch:
    id: int


@dataclass
class CharacterListMatch:
    alias: Optional[list] = None
    allegiance: Optional[list] = None
    book: Optional[list] = None
    born: Optional[str] = None
    culture: Optional[str] = None
    died: Optional[str] = None
    father: Optional[str] = None
    mother: Optional[str] = None
    name: Optional[str] = None
    played_by: Optional[list] = None
    pov_book: Optional[list] = None
    spouse: Optional[str] = None
    title: Optional[list] = None
    tv_series: Optional[list] = None
    url: Optional[str] = None


@dataclass
class House:
    ancestral_weapon: Optional[list] = None
    cadet_branch: Optional[list] = None
    coat_of_arm: Optional[str] = None
    current_lord: Optional[str] = None
    died_out: Optional[str] = None
    founded: Optional[str] = None
    founder: Optional[str] = None
    heir: Optional[str] = None
    name: Optional[str] = None
    overlord: Optional[str] = None
    region: Optional[str] = None
    seat: Optional[list] = None
    sworn_member: Optional[list] = None
    title: Optional[list] = None
    url: Optional[str] = None
    word: Optional[str] = None


@dataclass
class HouseLoadMatch:
    id: int


@dataclass
class HouseListMatch:
    ancestral_weapon: Optional[list] = None
    cadet_branch: Optional[list] = None
    coat_of_arm: Optional[str] = None
    current_lord: Optional[str] = None
    died_out: Optional[str] = None
    founded: Optional[str] = None
    founder: Optional[str] = None
    heir: Optional[str] = None
    name: Optional[str] = None
    overlord: Optional[str] = None
    region: Optional[str] = None
    seat: Optional[list] = None
    sworn_member: Optional[list] = None
    title: Optional[list] = None
    url: Optional[str] = None
    word: Optional[str] = None

