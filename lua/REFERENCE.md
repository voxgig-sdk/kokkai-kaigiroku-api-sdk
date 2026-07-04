# KokkaiKaigirokuApi Lua SDK Reference

Complete API reference for the KokkaiKaigirokuApi Lua SDK.


## KokkaiKaigirokuApiSDK

### Constructor

```lua
local sdk = require("kokkai-kaigiroku-api_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Meeting(data)`

Create a new `Meeting` entity instance. Pass `nil` for no initial data.

#### `MeetingList(data)`

Create a new `MeetingList` entity instance. Pass `nil` for no initial data.

#### `Speech(data)`

Create a new `Speech` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## MeetingEntity

```lua
local meeting = client:meeting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | ``$BOOLEAN`` | No |  |
| `date` | ``$STRING`` | No |  |
| `image_kind` | ``$STRING`` | No |  |
| `issue` | ``$STRING`` | No |  |
| `issue_id` | ``$STRING`` | No |  |
| `meeting_url` | ``$STRING`` | No |  |
| `name_of_house` | ``$STRING`` | No |  |
| `name_of_meeting` | ``$STRING`` | No |  |
| `pdf_url` | ``$STRING`` | No |  |
| `search_object` | ``$STRING`` | No |  |
| `session` | ``$INTEGER`` | No |  |
| `speech_record` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:meeting():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeetingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MeetingListEntity

```lua
local meeting_list = client:meeting_list(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | ``$BOOLEAN`` | No |  |
| `date` | ``$STRING`` | No |  |
| `image_kind` | ``$STRING`` | No |  |
| `issue` | ``$STRING`` | No |  |
| `issue_id` | ``$STRING`` | No |  |
| `meeting_url` | ``$STRING`` | No |  |
| `name_of_house` | ``$STRING`` | No |  |
| `name_of_meeting` | ``$STRING`` | No |  |
| `pdf_url` | ``$STRING`` | No |  |
| `search_object` | ``$STRING`` | No |  |
| `session` | ``$INTEGER`` | No |  |
| `speech_record` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:meeting_list():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeetingListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SpeechEntity

```lua
local speech = client:speech(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | ``$BOOLEAN`` | No |  |
| `date` | ``$STRING`` | No |  |
| `image_kind` | ``$STRING`` | No |  |
| `issue` | ``$STRING`` | No |  |
| `issue_id` | ``$STRING`` | No |  |
| `meeting_url` | ``$STRING`` | No |  |
| `name_of_house` | ``$STRING`` | No |  |
| `name_of_meeting` | ``$STRING`` | No |  |
| `pdf_url` | ``$STRING`` | No |  |
| `search_object` | ``$STRING`` | No |  |
| `session` | ``$INTEGER`` | No |  |
| `speaker` | ``$STRING`` | No |  |
| `speaker_group` | ``$STRING`` | No |  |
| `speaker_position` | ``$STRING`` | No |  |
| `speaker_role` | ``$STRING`` | No |  |
| `speaker_yomi` | ``$STRING`` | No |  |
| `speech` | ``$STRING`` | No |  |
| `speech_id` | ``$STRING`` | No |  |
| `speech_order` | ``$INTEGER`` | No |  |
| `speech_url` | ``$STRING`` | No |  |
| `start_page` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:speech():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SpeechEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

