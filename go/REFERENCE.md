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
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewKokkaiKaigirokuApiSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

