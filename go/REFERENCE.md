# KokkaiKaigirokuApi Golang SDK Reference

Complete API reference for the KokkaiKaigirokuApi Golang SDK.


## KokkaiKaigirokuApiSDK

### Constructor

```go
func NewKokkaiKaigirokuApiSDK(options map[string]any) *KokkaiKaigirokuApiSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TestSDK(testopts, sdkopts map[string]any) *KokkaiKaigirokuApiSDK`

Create a test client with mock features active. Both arguments may be `nil`.

```go
client := sdk.TestSDK(nil, nil)
```


### Instance Methods

#### `Meeting(data map[string]any) KokkaiKaigirokuApiEntity`

Create a new `Meeting` entity instance. Pass `nil` for no initial data.

#### `MeetingList(data map[string]any) KokkaiKaigirokuApiEntity`

Create a new `MeetingList` entity instance. Pass `nil` for no initial data.

#### `Speech(data map[string]any) KokkaiKaigirokuApiEntity`

Create a new `Speech` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## MeetingEntity

```go
meeting := client.Meeting(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Meeting(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MeetingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MeetingListEntity

```go
meeting_list := client.MeetingList(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MeetingList(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MeetingListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SpeechEntity

```go
speech := client.Speech(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Speech(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SpeechEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewKokkaiKaigirokuApiSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

