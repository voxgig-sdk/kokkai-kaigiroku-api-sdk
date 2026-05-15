# KokkaiKaigirokuApi Ruby SDK Reference

Complete API reference for the KokkaiKaigirokuApi Ruby SDK.


## KokkaiKaigirokuApiSDK

### Constructor

```ruby
require_relative 'kokkai-kaigiroku-api_sdk'

client = KokkaiKaigirokuApiSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `KokkaiKaigirokuApiSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = KokkaiKaigirokuApiSDK.test
```


### Instance Methods

#### `Meeting(data = nil)`

Create a new `Meeting` entity instance. Pass `nil` for no initial data.

#### `MeetingList(data = nil)`

Create a new `MeetingList` entity instance. Pass `nil` for no initial data.

#### `Speech(data = nil)`

Create a new `Speech` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## MeetingEntity

```ruby
meeting = client.Meeting
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
| `name_of_houses` | ``$STRING`` | No |  |
| `name_of_meeting` | ``$STRING`` | No |  |
| `pdf_url` | ``$STRING`` | No |  |
| `search_object` | ``$STRING`` | No |  |
| `session` | ``$INTEGER`` | No |  |
| `speech_record` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Meeting.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MeetingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MeetingListEntity

```ruby
meeting_list = client.MeetingList
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
| `name_of_houses` | ``$STRING`` | No |  |
| `name_of_meeting` | ``$STRING`` | No |  |
| `pdf_url` | ``$STRING`` | No |  |
| `search_object` | ``$STRING`` | No |  |
| `session` | ``$INTEGER`` | No |  |
| `speech_record` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.MeetingList.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MeetingListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SpeechEntity

```ruby
speech = client.Speech
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
| `name_of_houses` | ``$STRING`` | No |  |
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Speech.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SpeechEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = KokkaiKaigirokuApiSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

