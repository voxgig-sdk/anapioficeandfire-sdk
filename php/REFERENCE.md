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
| `authors` | `array` | No | An array of names of the authors that wrote this book |
| `characters` | `array` | No | An array of character resource URLs that has been in this book |
| `country` | `string` | No | The country that this book was published in |
| `isbn` | `string` | No | The International Standard Book Number (ISBN-13) that uniquely identifies this book |
| `mediaType` | `string` | No | The type of media this book was released in |
| `name` | `string` | No | The name of this book |
| `numberOfPages` | `int` | No | The number of pages in this book |
| `povCharacters` | `array` | No | An array of character resource URLs that has had a POV-chapter in this book |
| `publisher` | `string` | No | The company that published this book |
| `released` | `string` | No | The date (ISO 8601) when this book was released |
| `url` | `string` | No | The hypermedia URL of this resource |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Book()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Book()->load(["id" => 1]);
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
| `aliases` | `array` | No | The aliases that this character goes by |
| `allegiances` | `array` | No | An array of house resource URLs that this character is loyal to |
| `books` | `array` | No | An array of book resource URLs that this character has been in |
| `born` | `string` | No | Textual representation of when and where this character was born |
| `culture` | `string` | No | The culture that this character belongs to |
| `died` | `string` | No | Textual representation of when and where this character died |
| `father` | `string` | No | The character resource URL of this character's father |
| `mother` | `string` | No | The character resource URL of this character's mother |
| `name` | `string` | No | The name of this character |
| `playedBy` | `array` | No | An array of actor names that have played this character in the TV show |
| `povBooks` | `array` | No | An array of book resource URLs that this character has had a POV-chapter in |
| `spouse` | `string` | No | The character resource URL of this character's spouse |
| `titles` | `array` | No | The titles that this character holds |
| `tvSeries` | `array` | No | An array of season names that this character has been in |
| `url` | `string` | No | The hypermedia URL of this resource |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Character()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Character()->load(["id" => 1]);
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
| `ancestralWeapons` | `array` | No | An array of names of the ancestral weapons of this house |
| `cadetBranches` | `array` | No | An array of house resource URLs that was founded from this house |
| `coatOfArms` | `string` | No | Text describing the coat of arms of this house |
| `currentLord` | `string` | No | The character resource URL of this house's current lord |
| `diedOut` | `string` | No | The year that this house died out |
| `founded` | `string` | No | The year that this house was founded |
| `founder` | `string` | No | The character resource URL that founded this house |
| `heir` | `string` | No | The character resource URL of this house's heir |
| `name` | `string` | No | The name of this house |
| `overlord` | `string` | No | The house resource URL that this house answers to |
| `region` | `string` | No | The region that this house resides in |
| `seats` | `array` | No | The seats that this house holds |
| `swornMembers` | `array` | No | An array of character resource URLs that are sworn to this house |
| `titles` | `array` | No | The titles that this house holds |
| `url` | `string` | No | The hypermedia URL of this resource |
| `words` | `string` | No | The words of this house |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->House()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->House()->load(["id" => 1]);
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

