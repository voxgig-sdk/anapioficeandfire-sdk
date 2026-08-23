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
const book = client.Book()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authors` | `any[]` | No | An array of names of the authors that wrote this book |
| `characters` | `any[]` | No | An array of character resource URLs that has been in this book |
| `country` | `string` | No | The country that this book was published in |
| `isbn` | `string` | No | The International Standard Book Number (ISBN-13) that uniquely identifies this book |
| `mediaType` | `string` | No | The type of media this book was released in |
| `name` | `string` | No | The name of this book |
| `numberOfPages` | `number` | No | The number of pages in this book |
| `povCharacters` | `any[]` | No | An array of character resource URLs that has had a POV-chapter in this book |
| `publisher` | `string` | No | The company that published this book |
| `released` | `string` | No | The date (ISO 8601) when this book was released |
| `url` | `string` | No | The hypermedia URL of this resource |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Book().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Book().load({ id: 1 })
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
const character = client.Character()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliases` | `any[]` | No | The aliases that this character goes by |
| `allegiances` | `any[]` | No | An array of house resource URLs that this character is loyal to |
| `books` | `any[]` | No | An array of book resource URLs that this character has been in |
| `born` | `string` | No | Textual representation of when and where this character was born |
| `culture` | `string` | No | The culture that this character belongs to |
| `died` | `string` | No | Textual representation of when and where this character died |
| `father` | `string` | No | The character resource URL of this character's father |
| `mother` | `string` | No | The character resource URL of this character's mother |
| `name` | `string` | No | The name of this character |
| `playedBy` | `any[]` | No | An array of actor names that have played this character in the TV show |
| `povBooks` | `any[]` | No | An array of book resource URLs that this character has had a POV-chapter in |
| `spouse` | `string` | No | The character resource URL of this character's spouse |
| `titles` | `any[]` | No | The titles that this character holds |
| `tvSeries` | `any[]` | No | An array of season names that this character has been in |
| `url` | `string` | No | The hypermedia URL of this resource |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Character().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Character().load({ id: 1 })
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
const house = client.House()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ancestralWeapons` | `any[]` | No | An array of names of the ancestral weapons of this house |
| `cadetBranches` | `any[]` | No | An array of house resource URLs that was founded from this house |
| `coatOfArms` | `string` | No | Text describing the coat of arms of this house |
| `currentLord` | `string` | No | The character resource URL of this house's current lord |
| `diedOut` | `string` | No | The year that this house died out |
| `founded` | `string` | No | The year that this house was founded |
| `founder` | `string` | No | The character resource URL that founded this house |
| `heir` | `string` | No | The character resource URL of this house's heir |
| `name` | `string` | No | The name of this house |
| `overlord` | `string` | No | The house resource URL that this house answers to |
| `region` | `string` | No | The region that this house resides in |
| `seats` | `any[]` | No | The seats that this house holds |
| `swornMembers` | `any[]` | No | An array of character resource URLs that are sworn to this house |
| `titles` | `any[]` | No | The titles that this house holds |
| `url` | `string` | No | The hypermedia URL of this resource |
| `words` | `string` | No | The words of this house |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.House().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.House().load({ id: 1 })
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

