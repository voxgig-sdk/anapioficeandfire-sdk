# Anapioficeandfire SDK

Quantified, structured data from the universe of A Song of Ice and Fire — books, characters, and houses

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About AnApiOfIceAndFire

[An API of Ice and Fire](https://anapioficeandfire.com/) is a community-run, open-source HTTP API that exposes structured data from George R. R. Martin's *A Song of Ice and Fire* universe (the basis for HBO's *Game of Thrones*). It is maintained by [Joakim Skoog](https://anapioficeandfire.com/) and accompanied by SDKs in several languages.

What you get from the API:

- **Books** — metadata for each novel in the series, available under `/api/books`.
- **Characters** — entries such as name, culture, birth/death dates, titles, aliases, family relations (father, mother, spouse), allegiances, book appearances, POV chapters, and TV-series cast info, served under `/api/characters`.
- **Houses** — the noble houses of Westeros and Essos, with their seats, words, allegiances, and members, served under `/api/houses`.

The API is served over HTTPS at `https://anapioficeandfire.com/api` and requires no authentication. Resources are addressable by numeric ID (for example `/api/characters/583`, `/api/houses/378`). An interactive sandbox is available on the project homepage for ad-hoc exploration.

## Try it

**TypeScript**
```bash
npm install anapioficeandfire
```

**Python**
```bash
pip install anapioficeandfire-sdk
```

**PHP**
```bash
composer require voxgig/anapioficeandfire-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/anapioficeandfire-sdk/go
```

**Ruby**
```bash
gem install anapioficeandfire-sdk
```

**Lua**
```bash
luarocks install anapioficeandfire-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { AnapioficeandfireSDK } from 'anapioficeandfire'

const client = new AnapioficeandfireSDK({})

// List all books
const books = await client.Book().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o anapioficeandfire-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "anapioficeandfire": {
      "command": "/abs/path/to/anapioficeandfire-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Book** | A novel in the A Song of Ice and Fire series, fetched via `/api/books` and `/api/books/{id}`. | `/books` |
| **Character** | A person from the books — including name, culture, titles, aliases, family relations, allegiances, and book/TV appearances — fetched via `/api/characters` and `/api/characters/{id}`. | `/characters` |
| **House** | A noble house of Westeros or Essos with its seat, words, allegiances, and members, fetched via `/api/houses` and `/api/houses/{id}`. | `/houses` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from anapioficeandfire_sdk import AnapioficeandfireSDK

client = AnapioficeandfireSDK({})

# List all books
books, err = client.Book(None).list(None, None)

# Load a specific book
book, err = client.Book(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'anapioficeandfire_sdk.php';

$client = new AnapioficeandfireSDK([]);

// List all books
[$books, $err] = $client->Book(null)->list(null, null);

// Load a specific book
[$book, $err] = $client->Book(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/anapioficeandfire-sdk/go"

client := sdk.NewAnapioficeandfireSDK(map[string]any{})

// List all books
books, err := client.Book(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Anapioficeandfire_sdk"

client = AnapioficeandfireSDK.new({})

# List all books
books, err = client.Book(nil).list(nil, nil)

# Load a specific book
book, err = client.Book(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("anapioficeandfire_sdk")

local client = sdk.new({})

-- List all books
local books, err = client:Book(nil):list(nil, nil)

-- Load a specific book
local book, err = client:Book(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = AnapioficeandfireSDK.test()
const result = await client.Book().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = AnapioficeandfireSDK.test(None, None)
result, err = client.Book(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = AnapioficeandfireSDK::test(null, null);
[$result, $err] = $client->Book(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Book(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = AnapioficeandfireSDK.test(nil, nil)
result, err = client.Book(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Book(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the AnApiOfIceAndFire

- Upstream: [https://anapioficeandfire.com/](https://anapioficeandfire.com/)
- API docs: [https://anapioficeandfire.com/Documentation](https://anapioficeandfire.com/Documentation)

- Open source community project maintained by Joakim Skoog (© 2016 onwards).
- No authentication or API key is required to use the public HTTP endpoints.
- Specific licence terms are published in the project's GitHub repository — check there before redistributing data.
- Attribution to An API of Ice and Fire is appreciated when reusing the data.

---

Generated from the AnApiOfIceAndFire OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
