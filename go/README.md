# KokkaiKaigirokuApi Golang SDK



The Golang SDK for the KokkaiKaigirokuApi API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Meeting(nil)` — each with the same small set of operations (`List`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go=../kokkai-kaigiroku-api-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go"
)

func main() {
    client := sdk.New()

    // List meeting records — the value is the array of records itself.
    meetings, err := client.Meeting(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range meetings.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
meetings, err := client.Meeting(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = meetings
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

meeting, err := client.Meeting(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(meeting) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewKokkaiKaigirokuApiSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
KOKKAI_KAIGIROKU_API_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewKokkaiKaigirokuApiSDK

```go
func NewKokkaiKaigirokuApiSDK(options map[string]any) *KokkaiKaigirokuApiSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *KokkaiKaigirokuApiSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### KokkaiKaigirokuApiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Meeting` | `(data map[string]any) KokkaiKaigirokuApiEntity` | Create a Meeting entity instance. |
| `MeetingList` | `(data map[string]any) KokkaiKaigirokuApiEntity` | Create a MeetingList entity instance. |
| `Speech` | `(data map[string]any) KokkaiKaigirokuApiEntity` | Create a Speech entity instance. |

### Entity interface (KokkaiKaigirokuApiEntity)

All entities implement the `KokkaiKaigirokuApiEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    meeting, err := client.Meeting(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // meeting is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Meeting

| Field | Description |
| --- | --- |
| `"closing"` | 閉会中フラグ |
| `"date"` | 開催日付 |
| `"imageKind"` | イメージ種別（会議録・目次・索引・附録・追録） |
| `"issue"` | 号数 |
| `"issueID"` | 会議録ID |
| `"meetingURL"` | 会議録テキスト表示画面のURL |
| `"nameOfHouse"` | 院名 |
| `"nameOfMeeting"` | 会議名 |
| `"pdfURL"` | 会議録PDF表示画面のURL |
| `"searchObject"` | 検索対象箇所（議事冒頭・本文） |
| `"session"` | 国会回次 |
| `"speechRecord"` |  |

Operations: List.

API path: `/meeting`

#### MeetingList

| Field | Description |
| --- | --- |
| `"closing"` | 閉会中フラグ |
| `"date"` | 開催日付 |
| `"imageKind"` | イメージ種別（会議録・目次・索引・附録・追録） |
| `"issue"` | 号数 |
| `"issueID"` | 会議録ID |
| `"meetingURL"` | 会議録テキスト表示画面のURL |
| `"nameOfHouse"` | 院名 |
| `"nameOfMeeting"` | 会議名 |
| `"pdfURL"` | 会議録PDF表示画面のURL |
| `"searchObject"` | 検索対象箇所（議事冒頭・本文） |
| `"session"` | 国会回次 |
| `"speechRecord"` |  |

Operations: List.

API path: `/meeting_list`

#### Speech

| Field | Description |
| --- | --- |
| `"closing"` | 閉会中フラグ |
| `"date"` | 開催日付 |
| `"imageKind"` | イメージ種別（会議録・目次・索引・附録・追録） |
| `"issue"` | 号数 |
| `"issueID"` | 会議録ID |
| `"meetingURL"` | 会議録テキスト表示画面のURL |
| `"nameOfHouse"` | 院名 |
| `"nameOfMeeting"` | 会議名 |
| `"pdfURL"` | 会議録PDF表示画面のURL |
| `"searchObject"` | 検索対象箇所（議事冒頭・本文） |
| `"session"` | 国会回次 |
| `"speaker"` | 発言者名 |
| `"speakerGroup"` | 発言者所属会派 |
| `"speakerPosition"` | 発言者肩書き |
| `"speakerRole"` | 発言者役割 |
| `"speakerYomi"` | 発言者よみ |
| `"speech"` | 発言 |
| `"speechID"` | 発言ID |
| `"speechOrder"` | 発言番号 |
| `"speechURL"` | 発言URL |
| `"startPage"` | 発言が掲載されている開始ページ |

Operations: List.

API path: `/speech`



## Entities


### Meeting

Create an instance: `meeting := client.Meeting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closing` | `bool` | 閉会中フラグ |
| `date` | `string` | 開催日付 |
| `imageKind` | `string` | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | 号数 |
| `issueID` | `string` | 会議録ID |
| `meetingURL` | `string` | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | 院名 |
| `nameOfMeeting` | `string` | 会議名 |
| `pdfURL` | `string` | 会議録PDF表示画面のURL |
| `searchObject` | `string` | 検索対象箇所（議事冒頭・本文） |
| `session` | `int` | 国会回次 |
| `speechRecord` | `[]any` |  |

#### Example: List

```go
meetings, err := client.Meeting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(meetings) // the array of records
```


### MeetingList

Create an instance: `meetingList := client.MeetingList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closing` | `bool` | 閉会中フラグ |
| `date` | `string` | 開催日付 |
| `imageKind` | `string` | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | 号数 |
| `issueID` | `string` | 会議録ID |
| `meetingURL` | `string` | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | 院名 |
| `nameOfMeeting` | `string` | 会議名 |
| `pdfURL` | `string` | 会議録PDF表示画面のURL |
| `searchObject` | `string` | 検索対象箇所（議事冒頭・本文） |
| `session` | `int` | 国会回次 |
| `speechRecord` | `[]any` |  |

#### Example: List

```go
meetingLists, err := client.MeetingList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(meetingLists) // the array of records
```


### Speech

Create an instance: `speech := client.Speech(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closing` | `bool` | 閉会中フラグ |
| `date` | `string` | 開催日付 |
| `imageKind` | `string` | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | 号数 |
| `issueID` | `string` | 会議録ID |
| `meetingURL` | `string` | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | 院名 |
| `nameOfMeeting` | `string` | 会議名 |
| `pdfURL` | `string` | 会議録PDF表示画面のURL |
| `searchObject` | `string` | 検索対象箇所（議事冒頭・本文） |
| `session` | `int` | 国会回次 |
| `speaker` | `string` | 発言者名 |
| `speakerGroup` | `string` | 発言者所属会派 |
| `speakerPosition` | `string` | 発言者肩書き |
| `speakerRole` | `string` | 発言者役割 |
| `speakerYomi` | `string` | 発言者よみ |
| `speech` | `string` | 発言 |
| `speechID` | `string` | 発言ID |
| `speechOrder` | `int` | 発言番号 |
| `speechURL` | `string` | 発言URL |
| `startPage` | `int` | 発言が掲載されている開始ページ |

#### Example: List

```go
speechs, err := client.Speech(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(speechs) // the array of records
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go/
├── kokkai-kaigiroku-api.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
meeting := client.Meeting(nil)
meeting.List(nil, nil)

// meeting.Data() now returns the meeting data from the last list
// meeting.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
