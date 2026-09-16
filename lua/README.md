# Anapioficeandfire Lua SDK



The Lua SDK for the Anapioficeandfire API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Book()` — each with the same small set of operations (`list`, `load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/anapioficeandfire-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("anapioficeandfire_sdk")

local client = sdk.new()
```

### 2. List book records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local books, err = client:Book():list()
if err then error(err) end

for _, item in ipairs(books) do
  print(item["id"], item["country"])
end
```

### 3. Load a book

```lua
local book, err = client:Book():load({ id = 1 })
if err then error(err) end
print(book)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local houses, err = client:House():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:House():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
ANAPIOFICEANDFIRE_TEST_LIVE=TRUE
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### AnapioficeandfireSDK

```lua
local sdk = require("anapioficeandfire_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### AnapioficeandfireSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Book` | `(data) -> BookEntity` | Create a Book entity instance. |
| `Character` | `(data) -> CharacterEntity` | Create a Character entity instance. |
| `House` | `(data) -> HouseEntity` | Create a House entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local book, err = client:Book():load({ id = "example_id" })
    if err then error(err) end
    -- book is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Book

| Field | Description |
| --- | --- |
| `authors` | An array of names of the authors that wrote this book |
| `characters` | An array of character resource URLs that has been in this book |
| `country` | The country that this book was published in |
| `id` |  |
| `isbn` | The International Standard Book Number (ISBN-13) that uniquely identifies this book |
| `mediaType` | The type of media this book was released in |
| `name` | The name of this book |
| `numberOfPages` | The number of pages in this book |
| `povCharacters` | An array of character resource URLs that has had a POV-chapter in this book |
| `publisher` | The company that published this book |
| `released` | The date (ISO 8601) when this book was released |
| `url` | The hypermedia URL of this resource |

Operations: List, Load.

API path: `/books`

#### Character

| Field | Description |
| --- | --- |
| `aliases` | The aliases that this character goes by |
| `allegiances` | An array of house resource URLs that this character is loyal to |
| `books` | An array of book resource URLs that this character has been in |
| `born` | Textual representation of when and where this character was born |
| `culture` | The culture that this character belongs to |
| `died` | Textual representation of when and where this character died |
| `father` | The character resource URL of this character's father |
| `id` |  |
| `mother` | The character resource URL of this character's mother |
| `name` | The name of this character |
| `playedBy` | An array of actor names that have played this character in the TV show |
| `povBooks` | An array of book resource URLs that this character has had a POV-chapter in |
| `spouse` | The character resource URL of this character's spouse |
| `titles` | The titles that this character holds |
| `tvSeries` | An array of season names that this character has been in |
| `url` | The hypermedia URL of this resource |

Operations: List, Load.

API path: `/characters`

#### House

| Field | Description |
| --- | --- |
| `ancestralWeapons` | An array of names of the ancestral weapons of this house |
| `cadetBranches` | An array of house resource URLs that was founded from this house |
| `coatOfArms` | Text describing the coat of arms of this house |
| `currentLord` | The character resource URL of this house's current lord |
| `diedOut` | The year that this house died out |
| `founded` | The year that this house was founded |
| `founder` | The character resource URL that founded this house |
| `heir` | The character resource URL of this house's heir |
| `id` |  |
| `name` | The name of this house |
| `overlord` | The house resource URL that this house answers to |
| `region` | The region that this house resides in |
| `seats` | The seats that this house holds |
| `swornMembers` | An array of character resource URLs that are sworn to this house |
| `titles` | The titles that this house holds |
| `url` | The hypermedia URL of this resource |
| `words` | The words of this house |

Operations: List, Load.

API path: `/houses`



## Entities


### Book

Create an instance: `local book = client:Book(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authors` | `table` | An array of names of the authors that wrote this book |
| `characters` | `table` | An array of character resource URLs that has been in this book |
| `country` | `string` | The country that this book was published in |
| `id` | `string` |  |
| `isbn` | `string` | The International Standard Book Number (ISBN-13) that uniquely identifies this book |
| `mediaType` | `string` | The type of media this book was released in |
| `name` | `string` | The name of this book |
| `numberOfPages` | `number` | The number of pages in this book |
| `povCharacters` | `table` | An array of character resource URLs that has had a POV-chapter in this book |
| `publisher` | `string` | The company that published this book |
| `released` | `string` | The date (ISO 8601) when this book was released |
| `url` | `string` | The hypermedia URL of this resource |

#### Example: Load

```lua
local book, err = client:Book():load({ id = 1 })
```

#### Example: List

```lua
local books, err = client:Book():list()
```


### Character

Create an instance: `local character = client:Character(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aliases` | `table` | The aliases that this character goes by |
| `allegiances` | `table` | An array of house resource URLs that this character is loyal to |
| `books` | `table` | An array of book resource URLs that this character has been in |
| `born` | `string` | Textual representation of when and where this character was born |
| `culture` | `string` | The culture that this character belongs to |
| `died` | `string` | Textual representation of when and where this character died |
| `father` | `string` | The character resource URL of this character's father |
| `id` | `string` |  |
| `mother` | `string` | The character resource URL of this character's mother |
| `name` | `string` | The name of this character |
| `playedBy` | `table` | An array of actor names that have played this character in the TV show |
| `povBooks` | `table` | An array of book resource URLs that this character has had a POV-chapter in |
| `spouse` | `string` | The character resource URL of this character's spouse |
| `titles` | `table` | The titles that this character holds |
| `tvSeries` | `table` | An array of season names that this character has been in |
| `url` | `string` | The hypermedia URL of this resource |

#### Example: Load

```lua
local character, err = client:Character():load({ id = 1 })
```

#### Example: List

```lua
local characters, err = client:Character():list()
```


### House

Create an instance: `local house = client:House(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ancestralWeapons` | `table` | An array of names of the ancestral weapons of this house |
| `cadetBranches` | `table` | An array of house resource URLs that was founded from this house |
| `coatOfArms` | `string` | Text describing the coat of arms of this house |
| `currentLord` | `string` | The character resource URL of this house's current lord |
| `diedOut` | `string` | The year that this house died out |
| `founded` | `string` | The year that this house was founded |
| `founder` | `string` | The character resource URL that founded this house |
| `heir` | `string` | The character resource URL of this house's heir |
| `id` | `string` |  |
| `name` | `string` | The name of this house |
| `overlord` | `string` | The house resource URL that this house answers to |
| `region` | `string` | The region that this house resides in |
| `seats` | `table` | The seats that this house holds |
| `swornMembers` | `table` | An array of character resource URLs that are sworn to this house |
| `titles` | `table` | The titles that this house holds |
| `url` | `string` | The hypermedia URL of this resource |
| `words` | `string` | The words of this house |

#### Example: Load

```lua
local house, err = client:House():load({ id = 1 })
```

#### Example: List

```lua
local houses, err = client:House():list()
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── anapioficeandfire_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`anapioficeandfire_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local house = client:House()
house:list()

-- house:data_get() now returns the house data from the last list
-- house:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
