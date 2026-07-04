# Anapioficeandfire TypeScript SDK Reference

Complete API reference for the Anapioficeandfire TypeScript SDK.


## AnapioficeandfireSDK

### Constructor

```ts
new AnapioficeandfireSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `AnapioficeandfireSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = AnapioficeandfireSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `AnapioficeandfireSDK` instance in test mode.


### Instance Methods

#### `Book(data?: object)`

Create a new `Book` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BookEntity` instance.

#### `Character(data?: object)`

Create a new `Character` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CharacterEntity` instance.

#### `House(data?: object)`

Create a new `House` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HouseEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `AnapioficeandfireSDK.test()`.

**Returns:** `AnapioficeandfireSDK` instance in test mode.


---

## BookEntity

```ts
const book = client.book
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.book.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.book.load({ id: 'book_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BookEntity` instance with the same client and
options.

#### `client()`

Return the parent `AnapioficeandfireSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CharacterEntity

```ts
const character = client.character
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.character.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.character.load({ id: 'character_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CharacterEntity` instance with the same client and
options.

#### `client()`

Return the parent `AnapioficeandfireSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HouseEntity

```ts
const house = client.house
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.house.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.house.load({ id: 'house_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HouseEntity` instance with the same client and
options.

#### `client()`

Return the parent `AnapioficeandfireSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new AnapioficeandfireSDK({
  feature: {
    test: { active: true },
  }
})
```

