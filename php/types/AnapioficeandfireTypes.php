<?php
declare(strict_types=1);

// Typed models for the Anapioficeandfire SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Book entity data model. */
class Book
{
    public ?array $authors = null;
    public ?array $characters = null;
    public ?string $country = null;
    public ?string $isbn = null;
    public ?string $mediaType = null;
    public ?string $name = null;
    public ?int $numberOfPages = null;
    public ?array $povCharacters = null;
    public ?string $publisher = null;
    public ?string $released = null;
    public ?string $url = null;
}

/** Request payload for Book#load. */
class BookLoadMatch
{
    public int $id;
}

/** Request payload for Book#list. */
class BookListMatch
{
    public ?array $authors = null;
    public ?array $characters = null;
    public ?string $country = null;
    public ?string $isbn = null;
    public ?string $mediaType = null;
    public ?string $name = null;
    public ?int $numberOfPages = null;
    public ?array $povCharacters = null;
    public ?string $publisher = null;
    public ?string $released = null;
    public ?string $url = null;
}

/** Character entity data model. */
class Character
{
    public ?array $aliases = null;
    public ?array $allegiances = null;
    public ?array $books = null;
    public ?string $born = null;
    public ?string $culture = null;
    public ?string $died = null;
    public ?string $father = null;
    public ?string $mother = null;
    public ?string $name = null;
    public ?array $playedBy = null;
    public ?array $povBooks = null;
    public ?string $spouse = null;
    public ?array $titles = null;
    public ?array $tvSeries = null;
    public ?string $url = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?array $aliases = null;
    public ?array $allegiances = null;
    public ?array $books = null;
    public ?string $born = null;
    public ?string $culture = null;
    public ?string $died = null;
    public ?string $father = null;
    public ?string $mother = null;
    public ?string $name = null;
    public ?array $playedBy = null;
    public ?array $povBooks = null;
    public ?string $spouse = null;
    public ?array $titles = null;
    public ?array $tvSeries = null;
    public ?string $url = null;
}

/** House entity data model. */
class House
{
    public ?array $ancestralWeapons = null;
    public ?array $cadetBranches = null;
    public ?string $coatOfArms = null;
    public ?string $currentLord = null;
    public ?string $diedOut = null;
    public ?string $founded = null;
    public ?string $founder = null;
    public ?string $heir = null;
    public ?string $name = null;
    public ?string $overlord = null;
    public ?string $region = null;
    public ?array $seats = null;
    public ?array $swornMembers = null;
    public ?array $titles = null;
    public ?string $url = null;
    public ?string $words = null;
}

/** Request payload for House#load. */
class HouseLoadMatch
{
    public int $id;
}

/** Request payload for House#list. */
class HouseListMatch
{
    public ?array $ancestralWeapons = null;
    public ?array $cadetBranches = null;
    public ?string $coatOfArms = null;
    public ?string $currentLord = null;
    public ?string $diedOut = null;
    public ?string $founded = null;
    public ?string $founder = null;
    public ?string $heir = null;
    public ?string $name = null;
    public ?string $overlord = null;
    public ?string $region = null;
    public ?array $seats = null;
    public ?array $swornMembers = null;
    public ?array $titles = null;
    public ?string $url = null;
    public ?string $words = null;
}

