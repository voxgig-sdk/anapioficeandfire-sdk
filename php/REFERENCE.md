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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Book()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Book()->load(["id" => "book_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): BookEntity`

Create a new `BookEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CharacterEntity

```php
$character = $client->Character();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Character()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Character()->load(["id" => "character_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CharacterEntity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## HouseEntity

```php
$house = $client->House();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->House()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->House()->load(["id" => "house_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): HouseEntity`

Create a new `HouseEntity` instance with the same client and
options.

#### `getName(): string`

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

