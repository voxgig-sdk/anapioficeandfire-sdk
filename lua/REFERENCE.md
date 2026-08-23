# Anapioficeandfire Lua SDK Reference

Complete API reference for the Anapioficeandfire Lua SDK.


## AnapioficeandfireSDK

### Constructor

```lua
local sdk = require("anapioficeandfire_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Book(data)`

Create a new `Book` entity instance. Pass `nil` for no initial data.

#### `Character(data)`

Create a new `Character` entity instance. Pass `nil` for no initial data.

#### `House(data)`

Create a new `House` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## BookEntity

```lua
local book = client:Book(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authors` | `table` | No | An array of names of the authors that wrote this book |
| `characters` | `table` | No | An array of character resource URLs that has been in this book |
| `country` | `string` | No | The country that this book was published in |
| `isbn` | `string` | No | The International Standard Book Number (ISBN-13) that uniquely identifies this book |
| `mediaType` | `string` | No | The type of media this book was released in |
| `name` | `string` | No | The name of this book |
| `numberOfPages` | `number` | No | The number of pages in this book |
| `povCharacters` | `table` | No | An array of character resource URLs that has had a POV-chapter in this book |
| `publisher` | `string` | No | The company that published this book |
| `released` | `string` | No | The date (ISO 8601) when this book was released |
| `url` | `string` | No | The hypermedia URL of this resource |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Book():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Book():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CharacterEntity

```lua
local character = client:Character(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliases` | `table` | No | The aliases that this character goes by |
| `allegiances` | `table` | No | An array of house resource URLs that this character is loyal to |
| `books` | `table` | No | An array of book resource URLs that this character has been in |
| `born` | `string` | No | Textual representation of when and where this character was born |
| `culture` | `string` | No | The culture that this character belongs to |
| `died` | `string` | No | Textual representation of when and where this character died |
| `father` | `string` | No | The character resource URL of this character's father |
| `mother` | `string` | No | The character resource URL of this character's mother |
| `name` | `string` | No | The name of this character |
| `playedBy` | `table` | No | An array of actor names that have played this character in the TV show |
| `povBooks` | `table` | No | An array of book resource URLs that this character has had a POV-chapter in |
| `spouse` | `string` | No | The character resource URL of this character's spouse |
| `titles` | `table` | No | The titles that this character holds |
| `tvSeries` | `table` | No | An array of season names that this character has been in |
| `url` | `string` | No | The hypermedia URL of this resource |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Character():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Character():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HouseEntity

```lua
local house = client:House(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ancestralWeapons` | `table` | No | An array of names of the ancestral weapons of this house |
| `cadetBranches` | `table` | No | An array of house resource URLs that was founded from this house |
| `coatOfArms` | `string` | No | Text describing the coat of arms of this house |
| `currentLord` | `string` | No | The character resource URL of this house's current lord |
| `diedOut` | `string` | No | The year that this house died out |
| `founded` | `string` | No | The year that this house was founded |
| `founder` | `string` | No | The character resource URL that founded this house |
| `heir` | `string` | No | The character resource URL of this house's heir |
| `name` | `string` | No | The name of this house |
| `overlord` | `string` | No | The house resource URL that this house answers to |
| `region` | `string` | No | The region that this house resides in |
| `seats` | `table` | No | The seats that this house holds |
| `swornMembers` | `table` | No | An array of character resource URLs that are sworn to this house |
| `titles` | `table` | No | The titles that this house holds |
| `url` | `string` | No | The hypermedia URL of this resource |
| `words` | `string` | No | The words of this house |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:House():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:House():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HouseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

