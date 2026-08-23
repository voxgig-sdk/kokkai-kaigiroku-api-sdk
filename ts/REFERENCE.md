# KokkaiKaigirokuApi TypeScript SDK Reference

Complete API reference for the KokkaiKaigirokuApi TypeScript SDK.


## KokkaiKaigirokuApiSDK

### Constructor

```ts
new KokkaiKaigirokuApiSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `KokkaiKaigirokuApiSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = KokkaiKaigirokuApiSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `KokkaiKaigirokuApiSDK` instance in test mode.


### Instance Methods

#### `Meeting(data?: object)`

Create a new `Meeting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MeetingEntity` instance.

#### `MeetingList(data?: object)`

Create a new `MeetingList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MeetingListEntity` instance.

#### `Speech(data?: object)`

Create a new `Speech` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SpeechEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `KokkaiKaigirokuApiSDK.test()`.

**Returns:** `KokkaiKaigirokuApiSDK` instance in test mode.


---

## MeetingEntity

```ts
const meeting = client.Meeting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | `boolean` | No | 閉会中フラグ |
| `date` | `string` | No | 開催日付 |
| `imageKind` | `string` | No | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | No | 号数 |
| `issueID` | `string` | No | 会議録ID |
| `meetingURL` | `string` | No | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | No | 院名 |
| `nameOfMeeting` | `string` | No | 会議名 |
| `pdfURL` | `string` | No | 会議録PDF表示画面のURL |
| `searchObject` | `string` | No | 検索対象箇所（議事冒頭・本文） |
| `session` | `number` | No | 国会回次 |
| `speechRecord` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Meeting().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MeetingEntity` instance with the same client and
options.

#### `client()`

Return the parent `KokkaiKaigirokuApiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MeetingListEntity

```ts
const meeting_list = client.MeetingList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | `boolean` | No | 閉会中フラグ |
| `date` | `string` | No | 開催日付 |
| `imageKind` | `string` | No | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | No | 号数 |
| `issueID` | `string` | No | 会議録ID |
| `meetingURL` | `string` | No | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | No | 院名 |
| `nameOfMeeting` | `string` | No | 会議名 |
| `pdfURL` | `string` | No | 会議録PDF表示画面のURL |
| `searchObject` | `string` | No | 検索対象箇所（議事冒頭・本文） |
| `session` | `number` | No | 国会回次 |
| `speechRecord` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MeetingList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MeetingListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KokkaiKaigirokuApiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SpeechEntity

```ts
const speech = client.Speech()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closing` | `boolean` | No | 閉会中フラグ |
| `date` | `string` | No | 開催日付 |
| `imageKind` | `string` | No | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | No | 号数 |
| `issueID` | `string` | No | 会議録ID |
| `meetingURL` | `string` | No | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | No | 院名 |
| `nameOfMeeting` | `string` | No | 会議名 |
| `pdfURL` | `string` | No | 会議録PDF表示画面のURL |
| `searchObject` | `string` | No | 検索対象箇所（議事冒頭・本文） |
| `session` | `number` | No | 国会回次 |
| `speaker` | `string` | No | 発言者名 |
| `speakerGroup` | `string` | No | 発言者所属会派 |
| `speakerPosition` | `string` | No | 発言者肩書き |
| `speakerRole` | `string` | No | 発言者役割 |
| `speakerYomi` | `string` | No | 発言者よみ |
| `speech` | `string` | No | 発言 |
| `speechID` | `string` | No | 発言ID |
| `speechOrder` | `number` | No | 発言番号 |
| `speechURL` | `string` | No | 発言URL |
| `startPage` | `number` | No | 発言が掲載されている開始ページ |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Speech().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SpeechEntity` instance with the same client and
options.

#### `client()`

Return the parent `KokkaiKaigirokuApiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new KokkaiKaigirokuApiSDK({
  feature: {
    test: { active: true },
  }
})
```

