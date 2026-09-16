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
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *KokkaiKaigirokuApiSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *KokkaiKaigirokuApiSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
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
fmt.Println(meeting.GetName()) // "meeting"
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
| `speechRecord` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Meeting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
meetingList := client.MeetingList(nil)
fmt.Println(meetingList.GetName()) // "meeting_list"
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
| `speechRecord` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MeetingList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(speech.GetName()) // "speech"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Speech(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```go
client := sdk.NewKokkaiKaigirokuApiSDK(map[string]any{
    "feature": map[string]any{
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

