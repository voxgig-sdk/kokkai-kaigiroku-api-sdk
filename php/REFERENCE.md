# KokkaiKaigirokuApi PHP SDK Reference

Complete API reference for the KokkaiKaigirokuApi PHP SDK.


## KokkaiKaigirokuApiSDK

### Constructor

```php
require_once __DIR__ . '/kokkai-kaigiroku-api_sdk.php';

$client = new KokkaiKaigirokuApiSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `KokkaiKaigirokuApiSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = KokkaiKaigirokuApiSDK::test();
```


### Instance Methods

#### `Meeting($data = null)`

Create a new `MeetingEntity` instance. Pass `null` for no initial data.

#### `MeetingList($data = null)`

Create a new `MeetingListEntity` instance. Pass `null` for no initial data.

#### `Speech($data = null)`

Create a new `SpeechEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## MeetingEntity

```php
$meeting = $client->Meeting();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Meeting()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MeetingEntity`

Create a new `MeetingEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MeetingListEntity

```php
$meeting_list = $client->MeetingList();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->MeetingList()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MeetingListEntity`

Create a new `MeetingListEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SpeechEntity

```php
$speech = $client->Speech();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Speech()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SpeechEntity`

Create a new `SpeechEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new KokkaiKaigirokuApiSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

