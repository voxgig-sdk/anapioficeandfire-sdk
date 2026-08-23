# Anapioficeandfire Ruby SDK Reference

Complete API reference for the Anapioficeandfire Ruby SDK.


## AnapioficeandfireSDK

### Constructor

```ruby
require_relative 'Anapioficeandfire_sdk'

client = AnapioficeandfireSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `AnapioficeandfireSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = AnapioficeandfireSDK.test
```


### Instance Methods

#### `Book(data = nil)`

Create a new `Book` entity instance. Pass `nil` for no initial data.

#### `Character(data = nil)`

Create a new `Character` entity instance. Pass `nil` for no initial data.

#### `House(data = nil)`

Create a new `House` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## BookEntity

```ruby
book = client.Book
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authors` | `Array` | No | An array of names of the authors that wrote this book |
| `characters` | `Array` | No | An array of character resource URLs that has been in this book |
| `country` | `String` | No | The country that this book was published in |
| `isbn` | `String` | No | The International Standard Book Number (ISBN-13) that uniquely identifies this book |
| `mediaType` | `String` | No | The type of media this book was released in |
| `name` | `String` | No | The name of this book |
| `numberOfPages` | `Integer` | No | The number of pages in this book |
| `povCharacters` | `Array` | No | An array of character resource URLs that has had a POV-chapter in this book |
| `publisher` | `String` | No | The company that published this book |
| `released` | `String` | No | The date (ISO 8601) when this book was released |
| `url` | `String` | No | The hypermedia URL of this resource |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Book.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Book.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CharacterEntity

```ruby
character = client.Character
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliases` | `Array` | No | The aliases that this character goes by |
| `allegiances` | `Array` | No | An array of house resource URLs that this character is loyal to |
| `books` | `Array` | No | An array of book resource URLs that this character has been in |
| `born` | `String` | No | Textual representation of when and where this character was born |
| `culture` | `String` | No | The culture that this character belongs to |
| `died` | `String` | No | Textual representation of when and where this character died |
| `father` | `String` | No | The character resource URL of this character's father |
| `mother` | `String` | No | The character resource URL of this character's mother |
| `name` | `String` | No | The name of this character |
| `playedBy` | `Array` | No | An array of actor names that have played this character in the TV show |
| `povBooks` | `Array` | No | An array of book resource URLs that this character has had a POV-chapter in |
| `spouse` | `String` | No | The character resource URL of this character's spouse |
| `titles` | `Array` | No | The titles that this character holds |
| `tvSeries` | `Array` | No | An array of season names that this character has been in |
| `url` | `String` | No | The hypermedia URL of this resource |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Character.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Character.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HouseEntity

```ruby
house = client.House
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ancestralWeapons` | `Array` | No | An array of names of the ancestral weapons of this house |
| `cadetBranches` | `Array` | No | An array of house resource URLs that was founded from this house |
| `coatOfArms` | `String` | No | Text describing the coat of arms of this house |
| `currentLord` | `String` | No | The character resource URL of this house's current lord |
| `diedOut` | `String` | No | The year that this house died out |
| `founded` | `String` | No | The year that this house was founded |
| `founder` | `String` | No | The character resource URL that founded this house |
| `heir` | `String` | No | The character resource URL of this house's heir |
| `name` | `String` | No | The name of this house |
| `overlord` | `String` | No | The house resource URL that this house answers to |
| `region` | `String` | No | The region that this house resides in |
| `seats` | `Array` | No | The seats that this house holds |
| `swornMembers` | `Array` | No | An array of character resource URLs that are sworn to this house |
| `titles` | `Array` | No | The titles that this house holds |
| `url` | `String` | No | The hypermedia URL of this resource |
| `words` | `String` | No | The words of this house |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.House.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.House.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HouseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = AnapioficeandfireSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

