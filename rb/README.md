# Anapioficeandfire Ruby SDK



The Ruby SDK for the Anapioficeandfire API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Book` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/anapioficeandfire-sdk/releases](https://github.com/voxgig-sdk/anapioficeandfire-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Anapioficeandfire_sdk"

client = AnapioficeandfireSDK.new
```

### 2. List book records

```ruby
begin
  # list returns an Array of Book records — iterate directly.
  books = client.Book.list
  books.each do |item|
    puts "#{item["id"]} #{item["authors"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load a book

```ruby
begin
  # load returns the ENTITY — call data_get for the Book record (raises on error).
  book = client.Book.load({ "id" => 1 })
  puts book
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  houses = client.House.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = AnapioficeandfireSDK.test({
  "entity" => { "house" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
house = client.House.list()
puts house
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = AnapioficeandfireSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### AnapioficeandfireSDK

```ruby
require_relative "Anapioficeandfire_sdk"
client = AnapioficeandfireSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = AnapioficeandfireSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### AnapioficeandfireSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Book` | `(data) -> BookEntity` | Create a Book entity instance. |
| `Character` | `(data) -> CharacterEntity` | Create a Character entity instance. |
| `House` | `(data) -> HouseEntity` | Create a House entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `AnapioficeandfireError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `book = client.Book`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authors` | `Array` | An array of names of the authors that wrote this book |
| `characters` | `Array` | An array of character resource URLs that has been in this book |
| `country` | `String` | The country that this book was published in |
| `id` | `String` |  |
| `isbn` | `String` | The International Standard Book Number (ISBN-13) that uniquely identifies this book |
| `mediaType` | `String` | The type of media this book was released in |
| `name` | `String` | The name of this book |
| `numberOfPages` | `Integer` | The number of pages in this book |
| `povCharacters` | `Array` | An array of character resource URLs that has had a POV-chapter in this book |
| `publisher` | `String` | The company that published this book |
| `released` | `String` | The date (ISO 8601) when this book was released |
| `url` | `String` | The hypermedia URL of this resource |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Book record (raises on error).
book = client.Book.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Book records (raises on error).
books = client.Book.list
```


### Character

Create an instance: `character = client.Character`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aliases` | `Array` | The aliases that this character goes by |
| `allegiances` | `Array` | An array of house resource URLs that this character is loyal to |
| `books` | `Array` | An array of book resource URLs that this character has been in |
| `born` | `String` | Textual representation of when and where this character was born |
| `culture` | `String` | The culture that this character belongs to |
| `died` | `String` | Textual representation of when and where this character died |
| `father` | `String` | The character resource URL of this character's father |
| `id` | `String` |  |
| `mother` | `String` | The character resource URL of this character's mother |
| `name` | `String` | The name of this character |
| `playedBy` | `Array` | An array of actor names that have played this character in the TV show |
| `povBooks` | `Array` | An array of book resource URLs that this character has had a POV-chapter in |
| `spouse` | `String` | The character resource URL of this character's spouse |
| `titles` | `Array` | The titles that this character holds |
| `tvSeries` | `Array` | An array of season names that this character has been in |
| `url` | `String` | The hypermedia URL of this resource |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Character record (raises on error).
character = client.Character.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Character records (raises on error).
characters = client.Character.list
```


### House

Create an instance: `house = client.House`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ancestralWeapons` | `Array` | An array of names of the ancestral weapons of this house |
| `cadetBranches` | `Array` | An array of house resource URLs that was founded from this house |
| `coatOfArms` | `String` | Text describing the coat of arms of this house |
| `currentLord` | `String` | The character resource URL of this house's current lord |
| `diedOut` | `String` | The year that this house died out |
| `founded` | `String` | The year that this house was founded |
| `founder` | `String` | The character resource URL that founded this house |
| `heir` | `String` | The character resource URL of this house's heir |
| `id` | `String` |  |
| `name` | `String` | The name of this house |
| `overlord` | `String` | The house resource URL that this house answers to |
| `region` | `String` | The region that this house resides in |
| `seats` | `Array` | The seats that this house holds |
| `swornMembers` | `Array` | An array of character resource URLs that are sworn to this house |
| `titles` | `Array` | The titles that this house holds |
| `url` | `String` | The hypermedia URL of this resource |
| `words` | `String` | The words of this house |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the House record (raises on error).
house = client.House.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of House records (raises on error).
houses = client.House.list
```


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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Anapioficeandfire_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Anapioficeandfire_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
house = client.House
house.list()

# house.data_get now returns the house data from the last list
# house.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
