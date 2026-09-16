# Anapioficeandfire Python SDK



The Python SDK for the Anapioficeandfire API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Book()` — each
carrying a small, uniform set of operations (`list`, `load`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/anapioficeandfire-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from anapioficeandfire_sdk import AnapioficeandfireSDK

client = AnapioficeandfireSDK()
```

### 2. List book records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    books = client.Book().list()
    for book in books:
        print(book)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a book

`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    book = client.Book().load({"id": 1})
    print(book)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    houses = client.House().list()
    print(houses)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = AnapioficeandfireSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
house = client.House().list()
# house contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = AnapioficeandfireSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### AnapioficeandfireSDK

```python
from anapioficeandfire_sdk import AnapioficeandfireSDK

client = AnapioficeandfireSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = AnapioficeandfireSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### AnapioficeandfireSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Book` | `(data) -> BookEntity` | Create a Book entity instance. |
| `Character` | `(data) -> CharacterEntity` | Create a Character entity instance. |
| `House` | `(data) -> HouseEntity` | Create a House entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `book = client.Book()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authors` | `list` | An array of names of the authors that wrote this book |
| `characters` | `list` | An array of character resource URLs that has been in this book |
| `country` | `str` | The country that this book was published in |
| `id` | `str` |  |
| `isbn` | `str` | The International Standard Book Number (ISBN-13) that uniquely identifies this book |
| `mediaType` | `str` | The type of media this book was released in |
| `name` | `str` | The name of this book |
| `numberOfPages` | `int` | The number of pages in this book |
| `povCharacters` | `list` | An array of character resource URLs that has had a POV-chapter in this book |
| `publisher` | `str` | The company that published this book |
| `released` | `str` | The date (ISO 8601) when this book was released |
| `url` | `str` | The hypermedia URL of this resource |

#### Example: Load

```python
book = client.Book().load({"id": 1})
```

#### Example: List

```python
books = client.Book().list()
```


### Character

Create an instance: `character = client.Character()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aliases` | `list` | The aliases that this character goes by |
| `allegiances` | `list` | An array of house resource URLs that this character is loyal to |
| `books` | `list` | An array of book resource URLs that this character has been in |
| `born` | `str` | Textual representation of when and where this character was born |
| `culture` | `str` | The culture that this character belongs to |
| `died` | `str` | Textual representation of when and where this character died |
| `father` | `str` | The character resource URL of this character's father |
| `id` | `str` |  |
| `mother` | `str` | The character resource URL of this character's mother |
| `name` | `str` | The name of this character |
| `playedBy` | `list` | An array of actor names that have played this character in the TV show |
| `povBooks` | `list` | An array of book resource URLs that this character has had a POV-chapter in |
| `spouse` | `str` | The character resource URL of this character's spouse |
| `titles` | `list` | The titles that this character holds |
| `tvSeries` | `list` | An array of season names that this character has been in |
| `url` | `str` | The hypermedia URL of this resource |

#### Example: Load

```python
character = client.Character().load({"id": 1})
```

#### Example: List

```python
characters = client.Character().list()
```


### House

Create an instance: `house = client.House()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ancestralWeapons` | `list` | An array of names of the ancestral weapons of this house |
| `cadetBranches` | `list` | An array of house resource URLs that was founded from this house |
| `coatOfArms` | `str` | Text describing the coat of arms of this house |
| `currentLord` | `str` | The character resource URL of this house's current lord |
| `diedOut` | `str` | The year that this house died out |
| `founded` | `str` | The year that this house was founded |
| `founder` | `str` | The character resource URL that founded this house |
| `heir` | `str` | The character resource URL of this house's heir |
| `id` | `str` |  |
| `name` | `str` | The name of this house |
| `overlord` | `str` | The house resource URL that this house answers to |
| `region` | `str` | The region that this house resides in |
| `seats` | `list` | The seats that this house holds |
| `swornMembers` | `list` | An array of character resource URLs that are sworn to this house |
| `titles` | `list` | The titles that this house holds |
| `url` | `str` | The hypermedia URL of this resource |
| `words` | `str` | The words of this house |

#### Example: Load

```python
house = client.House().load({"id": 1})
```

#### Example: List

```python
houses = client.House().list()
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── anapioficeandfire_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`anapioficeandfire_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
house = client.House()
house.list()

# house.data_get() now returns the house data from the last list
# house.match_get() returns the last match criteria
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
