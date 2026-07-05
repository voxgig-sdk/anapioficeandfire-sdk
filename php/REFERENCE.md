# Anapioficeandfire PHP SDK Reference

Complete API reference for the Anapioficeandfire PHP SDK.


## AnapioficeandfireSDK

### Constructor

```php
require_once __DIR__ . '/anapioficeandfire_sdk.php';

$client = new AnapioficeandfireSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `AnapioficeandfireSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = AnapioficeandfireSDK::test();
```


### Instance Methods

#### `Book($data = null)`

Create a new `BookEntity` instance. Pass `null` for no initial data.

#### `Character($data = null)`

Create a new `CharacterEntity` instance. Pass `null` for no initial data.

#### `House($data = null)`

Create a new `HouseEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): AnapioficeandfireUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## BookEntity

```php
$book = $client->Book();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `array` | No |  |
| `character` | `array` | No |  |
| `country` | `string` | No |  |
| `isbn` | `string` | No |  |
| `media_type` | `string` | No |  |
| `name` | `string` | No |  |
| `number_of_page` | `int` | No |  |
| `pov_character` | `array` | No |  |
| `publisher` | `string` | No |  |
| `released` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Book()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Book()->load(["id" => "book_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BookEntity`

Create a new `BookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CharacterEntity

```php
$character = $client->Character();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `array` | No |  |
| `allegiance` | `array` | No |  |
| `book` | `array` | No |  |
| `born` | `string` | No |  |
| `culture` | `string` | No |  |
| `died` | `string` | No |  |
| `father` | `string` | No |  |
| `mother` | `string` | No |  |
| `name` | `string` | No |  |
| `played_by` | `array` | No |  |
| `pov_book` | `array` | No |  |
| `spouse` | `string` | No |  |
| `title` | `array` | No |  |
| `tv_series` | `array` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Character()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Character()->load(["id" => "character_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CharacterEntity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HouseEntity

```php
$house = $client->House();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ancestral_weapon` | `array` | No |  |
| `cadet_branch` | `array` | No |  |
| `coat_of_arm` | `string` | No |  |
| `current_lord` | `string` | No |  |
| `died_out` | `string` | No |  |
| `founded` | `string` | No |  |
| `founder` | `string` | No |  |
| `heir` | `string` | No |  |
| `name` | `string` | No |  |
| `overlord` | `string` | No |  |
| `region` | `string` | No |  |
| `seat` | `array` | No |  |
| `sworn_member` | `array` | No |  |
| `title` | `array` | No |  |
| `url` | `string` | No |  |
| `word` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->House()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->House()->load(["id" => "house_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HouseEntity`

Create a new `HouseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new AnapioficeandfireSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

