# Anapioficeandfire TypeScript SDK



The TypeScript SDK for the Anapioficeandfire API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Book()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/anapioficeandfire-sdk/releases](https://github.com/voxgig-sdk/anapioficeandfire-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { AnapioficeandfireSDK } from '@voxgig-sdk/anapioficeandfire'

const client = new AnapioficeandfireSDK()
```

### 2. List book records

`list()` resolves to an array of Book ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const books = await client.Book().list()

for (const book of books) {
  console.log(book)
}
```

### 3. Load a book

`load()` returns the entity directly and throws on failure:

```ts
try {
  const book = await client.Book().load({ id: 1 })
  console.log(book)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const houses = await client.House().list()
  console.log(houses)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = AnapioficeandfireSDK.test()

const house = await client.House().list()
// house is the entity, populated with mock response data
// — call house.data() for the record itself
console.log(house)
```

You can also use the instance method:

```ts
const client = new AnapioficeandfireSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.House()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new AnapioficeandfireSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
ANAPIOFICEANDFIRE_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### AnapioficeandfireSDK

#### Constructor

```ts
new AnapioficeandfireSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Book(data?)` | `BookEntity` | Create a Book entity instance. |
| `Character(data?)` | `CharacterEntity` | Create a Character entity instance. |
| `House(data?)` | `HouseEntity` | Create a House entity instance. |
| `tester(testopts?, sdkopts?)` | `AnapioficeandfireSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `AnapioficeandfireSDK.test(testopts?, sdkopts?)` | `AnapioficeandfireSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): AnapioficeandfireSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Book

| Field | Description |
| --- | --- |
| `authors` | An array of names of the authors that wrote this book |
| `characters` | An array of character resource URLs that has been in this book |
| `country` | The country that this book was published in |
| `isbn` | The International Standard Book Number (ISBN-13) that uniquely identifies this book |
| `mediaType` | The type of media this book was released in |
| `name` | The name of this book |
| `numberOfPages` | The number of pages in this book |
| `povCharacters` | An array of character resource URLs that has had a POV-chapter in this book |
| `publisher` | The company that published this book |
| `released` | The date (ISO 8601) when this book was released |
| `url` | The hypermedia URL of this resource |

Operations: list, load.

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
| `mother` | The character resource URL of this character's mother |
| `name` | The name of this character |
| `playedBy` | An array of actor names that have played this character in the TV show |
| `povBooks` | An array of book resource URLs that this character has had a POV-chapter in |
| `spouse` | The character resource URL of this character's spouse |
| `titles` | The titles that this character holds |
| `tvSeries` | An array of season names that this character has been in |
| `url` | The hypermedia URL of this resource |

Operations: list, load.

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
| `name` | The name of this house |
| `overlord` | The house resource URL that this house answers to |
| `region` | The region that this house resides in |
| `seats` | The seats that this house holds |
| `swornMembers` | An array of character resource URLs that are sworn to this house |
| `titles` | The titles that this house holds |
| `url` | The hypermedia URL of this resource |
| `words` | The words of this house |

Operations: list, load.

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
| `authors` | `any[]` | An array of names of the authors that wrote this book |
| `characters` | `any[]` | An array of character resource URLs that has been in this book |
| `country` | `string` | The country that this book was published in |
| `isbn` | `string` | The International Standard Book Number (ISBN-13) that uniquely identifies this book |
| `mediaType` | `string` | The type of media this book was released in |
| `name` | `string` | The name of this book |
| `numberOfPages` | `number` | The number of pages in this book |
| `povCharacters` | `any[]` | An array of character resource URLs that has had a POV-chapter in this book |
| `publisher` | `string` | The company that published this book |
| `released` | `string` | The date (ISO 8601) when this book was released |
| `url` | `string` | The hypermedia URL of this resource |

#### Example: Load

```ts
const book = await client.Book().load({ id: 1 })
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
| `aliases` | `any[]` | The aliases that this character goes by |
| `allegiances` | `any[]` | An array of house resource URLs that this character is loyal to |
| `books` | `any[]` | An array of book resource URLs that this character has been in |
| `born` | `string` | Textual representation of when and where this character was born |
| `culture` | `string` | The culture that this character belongs to |
| `died` | `string` | Textual representation of when and where this character died |
| `father` | `string` | The character resource URL of this character's father |
| `mother` | `string` | The character resource URL of this character's mother |
| `name` | `string` | The name of this character |
| `playedBy` | `any[]` | An array of actor names that have played this character in the TV show |
| `povBooks` | `any[]` | An array of book resource URLs that this character has had a POV-chapter in |
| `spouse` | `string` | The character resource URL of this character's spouse |
| `titles` | `any[]` | The titles that this character holds |
| `tvSeries` | `any[]` | An array of season names that this character has been in |
| `url` | `string` | The hypermedia URL of this resource |

#### Example: Load

```ts
const character = await client.Character().load({ id: 1 })
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
| `ancestralWeapons` | `any[]` | An array of names of the ancestral weapons of this house |
| `cadetBranches` | `any[]` | An array of house resource URLs that was founded from this house |
| `coatOfArms` | `string` | Text describing the coat of arms of this house |
| `currentLord` | `string` | The character resource URL of this house's current lord |
| `diedOut` | `string` | The year that this house died out |
| `founded` | `string` | The year that this house was founded |
| `founder` | `string` | The character resource URL that founded this house |
| `heir` | `string` | The character resource URL of this house's heir |
| `name` | `string` | The name of this house |
| `overlord` | `string` | The house resource URL that this house answers to |
| `region` | `string` | The region that this house resides in |
| `seats` | `any[]` | The seats that this house holds |
| `swornMembers` | `any[]` | An array of character resource URLs that are sworn to this house |
| `titles` | `any[]` | The titles that this house holds |
| `url` | `string` | The hypermedia URL of this resource |
| `words` | `string` | The words of this house |

#### Example: Load

```ts
const house = await client.House().load({ id: 1 })
```

#### Example: List

```ts
const houses = await client.House().list()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
anapioficeandfire/
├── src/
│   ├── AnapioficeandfireSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { AnapioficeandfireSDK } from '@voxgig-sdk/anapioficeandfire'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const house = client.House()
await house.list()

// house.data() now returns the house data from the last `list`
// house.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
