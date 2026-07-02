# Anapioficeandfire Golang SDK Reference

Complete API reference for the Anapioficeandfire Golang SDK.


## AnapioficeandfireSDK

### Constructor

```go
func NewAnapioficeandfireSDK(options map[string]any) *AnapioficeandfireSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *AnapioficeandfireSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *AnapioficeandfireSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Book(data map[string]any) AnapioficeandfireEntity`

Create a new `Book` entity instance. Pass `nil` for no initial data.

#### `Character(data map[string]any) AnapioficeandfireEntity`

Create a new `Character` entity instance. Pass `nil` for no initial data.

#### `House(data map[string]any) AnapioficeandfireEntity`

Create a new `House` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## BookEntity

```go
book := client.Book(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | ``$ARRAY`` | No |  |
| `character` | ``$ARRAY`` | No |  |
| `country` | ``$STRING`` | No |  |
| `isbn` | ``$STRING`` | No |  |
| `media_type` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `number_of_page` | ``$INTEGER`` | No |  |
| `pov_character` | ``$ARRAY`` | No |  |
| `publisher` | ``$STRING`` | No |  |
| `released` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Book(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Book(nil).Load(map[string]any{"id": "book_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CharacterEntity

```go
character := client.Character(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | ``$ARRAY`` | No |  |
| `allegiance` | ``$ARRAY`` | No |  |
| `book` | ``$ARRAY`` | No |  |
| `born` | ``$STRING`` | No |  |
| `culture` | ``$STRING`` | No |  |
| `died` | ``$STRING`` | No |  |
| `father` | ``$STRING`` | No |  |
| `mother` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `played_by` | ``$ARRAY`` | No |  |
| `pov_book` | ``$ARRAY`` | No |  |
| `spouse` | ``$STRING`` | No |  |
| `title` | ``$ARRAY`` | No |  |
| `tv_series` | ``$ARRAY`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Character(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Character(nil).Load(map[string]any{"id": "character_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HouseEntity

```go
house := client.House(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ancestral_weapon` | ``$ARRAY`` | No |  |
| `cadet_branch` | ``$ARRAY`` | No |  |
| `coat_of_arm` | ``$STRING`` | No |  |
| `current_lord` | ``$STRING`` | No |  |
| `died_out` | ``$STRING`` | No |  |
| `founded` | ``$STRING`` | No |  |
| `founder` | ``$STRING`` | No |  |
| `heir` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `overlord` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |
| `seat` | ``$ARRAY`` | No |  |
| `sworn_member` | ``$ARRAY`` | No |  |
| `title` | ``$ARRAY`` | No |  |
| `url` | ``$STRING`` | No |  |
| `word` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.House(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.House(nil).Load(map[string]any{"id": "house_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HouseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewAnapioficeandfireSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

