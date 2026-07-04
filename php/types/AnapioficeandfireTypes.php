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
    public ?array $author = null;
    public ?array $character = null;
    public ?string $country = null;
    public ?string $isbn = null;
    public ?string $media_type = null;
    public ?string $name = null;
    public ?int $number_of_page = null;
    public ?array $pov_character = null;
    public ?string $publisher = null;
    public ?string $released = null;
    public ?string $url = null;
}

/** Request payload for Book#load. */
class BookLoadMatch
{
    public int $id;
}

/** Match filter for Book#list (any subset of Book fields). */
class BookListMatch
{
    public ?array $author = null;
    public ?array $character = null;
    public ?string $country = null;
    public ?string $isbn = null;
    public ?string $media_type = null;
    public ?string $name = null;
    public ?int $number_of_page = null;
    public ?array $pov_character = null;
    public ?string $publisher = null;
    public ?string $released = null;
    public ?string $url = null;
}

/** Character entity data model. */
class Character
{
    public ?array $alias = null;
    public ?array $allegiance = null;
    public ?array $book = null;
    public ?string $born = null;
    public ?string $culture = null;
    public ?string $died = null;
    public ?string $father = null;
    public ?string $mother = null;
    public ?string $name = null;
    public ?array $played_by = null;
    public ?array $pov_book = null;
    public ?string $spouse = null;
    public ?array $title = null;
    public ?array $tv_series = null;
    public ?string $url = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Match filter for Character#list (any subset of Character fields). */
class CharacterListMatch
{
    public ?array $alias = null;
    public ?array $allegiance = null;
    public ?array $book = null;
    public ?string $born = null;
    public ?string $culture = null;
    public ?string $died = null;
    public ?string $father = null;
    public ?string $mother = null;
    public ?string $name = null;
    public ?array $played_by = null;
    public ?array $pov_book = null;
    public ?string $spouse = null;
    public ?array $title = null;
    public ?array $tv_series = null;
    public ?string $url = null;
}

/** House entity data model. */
class House
{
    public ?array $ancestral_weapon = null;
    public ?array $cadet_branch = null;
    public ?string $coat_of_arm = null;
    public ?string $current_lord = null;
    public ?string $died_out = null;
    public ?string $founded = null;
    public ?string $founder = null;
    public ?string $heir = null;
    public ?string $name = null;
    public ?string $overlord = null;
    public ?string $region = null;
    public ?array $seat = null;
    public ?array $sworn_member = null;
    public ?array $title = null;
    public ?string $url = null;
    public ?string $word = null;
}

/** Request payload for House#load. */
class HouseLoadMatch
{
    public int $id;
}

/** Match filter for House#list (any subset of House fields). */
class HouseListMatch
{
    public ?array $ancestral_weapon = null;
    public ?array $cadet_branch = null;
    public ?string $coat_of_arm = null;
    public ?string $current_lord = null;
    public ?string $died_out = null;
    public ?string $founded = null;
    public ?string $founder = null;
    public ?string $heir = null;
    public ?string $name = null;
    public ?string $overlord = null;
    public ?string $region = null;
    public ?array $seat = null;
    public ?array $sworn_member = null;
    public ?array $title = null;
    public ?string $url = null;
    public ?string $word = null;
}

