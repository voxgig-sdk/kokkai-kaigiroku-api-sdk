# KokkaiKaigirokuApi PHP SDK Reference

Complete API reference for the KokkaiKaigirokuApi PHP SDK.


## KokkaiKaigirokuApiSDK

### Constructor

```php
require_once __DIR__ . '/kokkaikaigirokuapi_sdk.php';

$client = new KokkaiKaigirokuApiSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
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

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): KokkaiKaigirokuApiUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

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

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## MeetingEntity

```php
$meeting = $client->Meeting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | `bool` | No | 閉会中フラグ |
| `date` | `string` | No | 開催日付 |
| `imageKind` | `string` | No | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | No | 号数 |
| `issueID` | `string` | No | 会議録ID |
| `meetingURL` | `string` | No | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | No | 院名 |
| `nameOfMeeting` | `string` | No | 会議名 |
| `pdfURL` | `string` | No | 会議録PDF表示画面のURL |
| `searchObject` | `string` | No | 検索対象箇所（議事冒頭・本文） |
| `session` | `int` | No | 国会回次 |
| `speechRecord` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Meeting()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MeetingEntity`

Create a new `MeetingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MeetingListEntity

```php
$meeting_list = $client->MeetingList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | `bool` | No | 閉会中フラグ |
| `date` | `string` | No | 開催日付 |
| `imageKind` | `string` | No | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | No | 号数 |
| `issueID` | `string` | No | 会議録ID |
| `meetingURL` | `string` | No | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | No | 院名 |
| `nameOfMeeting` | `string` | No | 会議名 |
| `pdfURL` | `string` | No | 会議録PDF表示画面のURL |
| `searchObject` | `string` | No | 検索対象箇所（議事冒頭・本文） |
| `session` | `int` | No | 国会回次 |
| `speechRecord` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MeetingList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MeetingListEntity`

Create a new `MeetingListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SpeechEntity

```php
$speech = $client->Speech();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | `bool` | No | 閉会中フラグ |
| `date` | `string` | No | 開催日付 |
| `imageKind` | `string` | No | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | No | 号数 |
| `issueID` | `string` | No | 会議録ID |
| `meetingURL` | `string` | No | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | No | 院名 |
| `nameOfMeeting` | `string` | No | 会議名 |
| `pdfURL` | `string` | No | 会議録PDF表示画面のURL |
| `searchObject` | `string` | No | 検索対象箇所（議事冒頭・本文） |
| `session` | `int` | No | 国会回次 |
| `speaker` | `string` | No | 発言者名 |
| `speakerGroup` | `string` | No | 発言者所属会派 |
| `speakerPosition` | `string` | No | 発言者肩書き |
| `speakerRole` | `string` | No | 発言者役割 |
| `speakerYomi` | `string` | No | 発言者よみ |
| `speech` | `string` | No | 発言 |
| `speechID` | `string` | No | 発言ID |
| `speechOrder` | `int` | No | 発言番号 |
| `speechURL` | `string` | No | 発言URL |
| `startPage` | `int` | No | 発言が掲載されている開始ページ |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Speech()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SpeechEntity`

Create a new `SpeechEntity` instance with the same client and
options.

#### `get_name(): string`

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

