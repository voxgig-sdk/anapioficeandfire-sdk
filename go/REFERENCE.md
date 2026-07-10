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
fmt.Println(book.GetName()) // "book"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `[]any` | No |  |
| `character` | `[]any` | No |  |
| `country` | `string` | No |  |
| `isbn` | `string` | No |  |
| `media_type` | `string` | No |  |
| `name` | `string` | No |  |
| `number_of_page` | `int` | No |  |
| `pov_character` | `[]any` | No |  |
| `publisher` | `string` | No |  |
| `released` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Book(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Book(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fmt.Println(character.GetName()) // "character"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `[]any` | No |  |
| `allegiance` | `[]any` | No |  |
| `book` | `[]any` | No |  |
| `born` | `string` | No |  |
| `culture` | `string` | No |  |
| `died` | `string` | No |  |
| `father` | `string` | No |  |
| `mother` | `string` | No |  |
| `name` | `string` | No |  |
| `played_by` | `[]any` | No |  |
| `pov_book` | `[]any` | No |  |
| `spouse` | `string` | No |  |
| `title` | `[]any` | No |  |
| `tv_series` | `[]any` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Character(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Character(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fmt.Println(house.GetName()) // "house"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ancestral_weapon` | `[]any` | No |  |
| `cadet_branch` | `[]any` | No |  |
| `coat_of_arm` | `string` | No |  |
| `current_lord` | `string` | No |  |
| `died_out` | `string` | No |  |
| `founded` | `string` | No |  |
| `founder` | `string` | No |  |
| `heir` | `string` | No |  |
| `name` | `string` | No |  |
| `overlord` | `string` | No |  |
| `region` | `string` | No |  |
| `seat` | `[]any` | No |  |
| `sworn_member` | `[]any` | No |  |
| `title` | `[]any` | No |  |
| `url` | `string` | No |  |
| `word` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.House(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.House(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

