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
local meeting = client:Meeting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | `boolean` | No |  |
| `date` | `string` | No |  |
| `image_kind` | `string` | No |  |
| `issue` | `string` | No |  |
| `issue_id` | `string` | No |  |
| `meeting_url` | `string` | No |  |
| `name_of_house` | `string` | No |  |
| `name_of_meeting` | `string` | No |  |
| `pdf_url` | `string` | No |  |
| `search_object` | `string` | No |  |
| `session` | `number` | No |  |
| `speech_record` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Meeting():list()
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
local meeting_list = client:MeetingList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | `boolean` | No |  |
| `date` | `string` | No |  |
| `image_kind` | `string` | No |  |
| `issue` | `string` | No |  |
| `issue_id` | `string` | No |  |
| `meeting_url` | `string` | No |  |
| `name_of_house` | `string` | No |  |
| `name_of_meeting` | `string` | No |  |
| `pdf_url` | `string` | No |  |
| `search_object` | `string` | No |  |
| `session` | `number` | No |  |
| `speech_record` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MeetingList():list()
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
local speech = client:Speech(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | `boolean` | No |  |
| `date` | `string` | No |  |
| `image_kind` | `string` | No |  |
| `issue` | `string` | No |  |
| `issue_id` | `string` | No |  |
| `meeting_url` | `string` | No |  |
| `name_of_house` | `string` | No |  |
| `name_of_meeting` | `string` | No |  |
| `pdf_url` | `string` | No |  |
| `search_object` | `string` | No |  |
| `session` | `number` | No |  |
| `speaker` | `string` | No |  |
| `speaker_group` | `string` | No |  |
| `speaker_position` | `string` | No |  |
| `speaker_role` | `string` | No |  |
| `speaker_yomi` | `string` | No |  |
| `speech` | `string` | No |  |
| `speech_id` | `string` | No |  |
| `speech_order` | `number` | No |  |
| `speech_url` | `string` | No |  |
| `start_page` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Speech():list()
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

