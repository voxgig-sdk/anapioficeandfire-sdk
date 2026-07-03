# Anapioficeandfire PHP SDK



The PHP SDK for the Anapioficeandfire API — an entity-oriented client using PHP conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
composer require voxgig-sdk/anapioficeandfire
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'anapioficeandfire_sdk.php';

$client = new AnapioficeandfireSDK([
    "apikey" => getenv("ANAPIOFICEANDFIRE_APIKEY"),
]);
```

### 2. List books

```php
[$result, $err] = $client->Book()->list();
if ($err) { throw new \Exception($err); }

if (is_array($result)) {
    foreach ($result as $item) {
        $d = $item->data_get();
        echo $d["id"] . " " . $d["name"] . "\n";
    }
}
```

### 3. Load a book

```php
[$result, $err] = $client->Book()->load(["id" => "example_id"]);
if ($err) { throw new \Exception($err); }
print_r($result);
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
}
```

### Prepare a request without sending it

```php
[$fetchdef, $err] = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = AnapioficeandfireSDK::test();

[$result, $err] = $client->Anapioficeandfire()->load(["id" => "test01"]);
// $result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new AnapioficeandfireSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
ANAPIOFICEANDFIRE_TEST_LIVE=TRUE
ANAPIOFICEANDFIRE_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### AnapioficeandfireSDK

```php
require_once 'anapioficeandfire_sdk.php';
$client = new AnapioficeandfireSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = AnapioficeandfireSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### AnapioficeandfireSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Book` | `($data): BookEntity` | Create a Book entity instance. |
| `Character` | `($data): CharacterEntity` | Create a Character entity instance. |
| `House` | `($data): HouseEntity` | Create a House entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return `[$result, $err]`. The first value is an
`array` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Book

| Field | Description |
| --- | --- |
| `author` |  |
| `character` |  |
| `country` |  |
| `isbn` |  |
| `media_type` |  |
| `name` |  |
| `number_of_page` |  |
| `pov_character` |  |
| `publisher` |  |
| `released` |  |
| `url` |  |

Operations: List, Load.

API path: `/books`

#### Character

| Field | Description |
| --- | --- |
| `alias` |  |
| `allegiance` |  |
| `book` |  |
| `born` |  |
| `culture` |  |
| `died` |  |
| `father` |  |
| `mother` |  |
| `name` |  |
| `played_by` |  |
| `pov_book` |  |
| `spouse` |  |
| `title` |  |
| `tv_series` |  |
| `url` |  |

Operations: List, Load.

API path: `/characters`

#### House

| Field | Description |
| --- | --- |
| `ancestral_weapon` |  |
| `cadet_branch` |  |
| `coat_of_arm` |  |
| `current_lord` |  |
| `died_out` |  |
| `founded` |  |
| `founder` |  |
| `heir` |  |
| `name` |  |
| `overlord` |  |
| `region` |  |
| `seat` |  |
| `sworn_member` |  |
| `title` |  |
| `url` |  |
| `word` |  |

Operations: List, Load.

API path: `/houses`



## Entities


### Book

Create an instance: `const book = client.Book()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | ``$ARRAY`` |  |
| `character` | ``$ARRAY`` |  |
| `country` | ``$STRING`` |  |
| `isbn` | ``$STRING`` |  |
| `media_type` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `number_of_page` | ``$INTEGER`` |  |
| `pov_character` | ``$ARRAY`` |  |
| `publisher` | ``$STRING`` |  |
| `released` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: Load

```ts
const book = await client.Book().load({ id: 'book_id' })
```

#### Example: List

```ts
const books = await client.Book().list()
```


### Character

Create an instance: `const character = client.Character()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | ``$ARRAY`` |  |
| `allegiance` | ``$ARRAY`` |  |
| `book` | ``$ARRAY`` |  |
| `born` | ``$STRING`` |  |
| `culture` | ``$STRING`` |  |
| `died` | ``$STRING`` |  |
| `father` | ``$STRING`` |  |
| `mother` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `played_by` | ``$ARRAY`` |  |
| `pov_book` | ``$ARRAY`` |  |
| `spouse` | ``$STRING`` |  |
| `title` | ``$ARRAY`` |  |
| `tv_series` | ``$ARRAY`` |  |
| `url` | ``$STRING`` |  |

#### Example: Load

```ts
const character = await client.Character().load({ id: 'character_id' })
```

#### Example: List

```ts
const characters = await client.Character().list()
```


### House

Create an instance: `const house = client.House()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ancestral_weapon` | ``$ARRAY`` |  |
| `cadet_branch` | ``$ARRAY`` |  |
| `coat_of_arm` | ``$STRING`` |  |
| `current_lord` | ``$STRING`` |  |
| `died_out` | ``$STRING`` |  |
| `founded` | ``$STRING`` |  |
| `founder` | ``$STRING`` |  |
| `heir` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `overlord` | ``$STRING`` |  |
| `region` | ``$STRING`` |  |
| `seat` | ``$ARRAY`` |  |
| `sworn_member` | ``$ARRAY`` |  |
| `title` | ``$ARRAY`` |  |
| `url` | ``$STRING`` |  |
| `word` | ``$STRING`` |  |

#### Example: Load

```ts
const house = await client.House().load({ id: 'house_id' })
```

#### Example: List

```ts
const houses = await client.House().list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as the second element in the return array.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── anapioficeandfire_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`anapioficeandfire_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$moon = $client->Moon();
[$result, $err] = $moon->load(["planet_id" => "earth", "id" => "luna"]);

// $moon->dataGet() now returns the loaded moon data
// $moon->matchGet() returns the last match criteria
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
