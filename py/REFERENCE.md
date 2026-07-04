# Anapioficeandfire Python SDK Reference

Complete API reference for the Anapioficeandfire Python SDK.


## AnapioficeandfireSDK

### Constructor

```python
from anapioficeandfire_sdk import AnapioficeandfireSDK

client = AnapioficeandfireSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `AnapioficeandfireSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = AnapioficeandfireSDK.test()
```


### Instance Methods

#### `Book(data=None)`

Create a new `BookEntity` instance. Pass `None` for no initial data.

#### `Character(data=None)`

Create a new `CharacterEntity` instance. Pass `None` for no initial data.

#### `House(data=None)`

Create a new `HouseEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## BookEntity

```python
book = client.Book()
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Book().list({})
for book in results:
    print(book)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Book().load({"id": "book_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CharacterEntity

```python
character = client.Character()
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Character().list({})
for character in results:
    print(character)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Character().load({"id": "character_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CharacterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HouseEntity

```python
house = client.House()
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.House().list({})
for house in results:
    print(house)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.House().load({"id": "house_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HouseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = AnapioficeandfireSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

