# KokkaiKaigirokuApi Python SDK Reference

Complete API reference for the KokkaiKaigirokuApi Python SDK.


## KokkaiKaigirokuApiSDK

### Constructor

```python
from kokkai-kaigiroku-api_sdk import KokkaiKaigirokuApiSDK

client = KokkaiKaigirokuApiSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `KokkaiKaigirokuApiSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = KokkaiKaigirokuApiSDK.test()
```


### Instance Methods

#### `Meeting(data=None)`

Create a new `MeetingEntity` instance. Pass `None` for no initial data.

#### `MeetingList(data=None)`

Create a new `MeetingListEntity` instance. Pass `None` for no initial data.

#### `Speech(data=None)`

Create a new `SpeechEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## MeetingEntity

```python
meeting = client.Meeting()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Meeting().list({})
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

Create a new `MeetingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MeetingListEntity

```python
meeting_list = client.MeetingList()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.MeetingList().list({})
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

Create a new `MeetingListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SpeechEntity

```python
speech = client.Speech()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Speech().list({})
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

Create a new `SpeechEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = KokkaiKaigirokuApiSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

