# KokkaiKaigirokuApi TypeScript SDK



The TypeScript SDK for the KokkaiKaigirokuApi API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Meeting()` — each with a small set of operations (`list`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/releases](https://github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { KokkaiKaigirokuApiSDK } from '@voxgig-sdk/kokkai-kaigiroku-api-sdk'

const client = new KokkaiKaigirokuApiSDK()
```

### 2. List meeting records

`list()` resolves to an array of Meeting ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const meetings = await client.Meeting().list()

for (const meeting of meetings) {
  console.log(meeting)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const meetings = await client.Meeting().list()
  console.log(meetings)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = KokkaiKaigirokuApiSDK.test()

const meeting = await client.Meeting().list()
// meeting is the entity, populated with mock response data
// — call meeting.data() for the record itself
console.log(meeting)
```

You can also use the instance method:

```ts
const client = new KokkaiKaigirokuApiSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Meeting()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new KokkaiKaigirokuApiSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
KOKKAI_KAIGIROKU_API_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### KokkaiKaigirokuApiSDK

#### Constructor

```ts
new KokkaiKaigirokuApiSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Meeting(data?)` | `MeetingEntity` | Create a Meeting entity instance. |
| `MeetingList(data?)` | `MeetingListEntity` | Create a MeetingList entity instance. |
| `Speech(data?)` | `SpeechEntity` | Create a Speech entity instance. |
| `tester(testopts?, sdkopts?)` | `KokkaiKaigirokuApiSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `KokkaiKaigirokuApiSDK.test(testopts?, sdkopts?)` | `KokkaiKaigirokuApiSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): KokkaiKaigirokuApiSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Meeting

| Field | Description |
| --- | --- |
| `closing` | 閉会中フラグ |
| `date` | 開催日付 |
| `imageKind` | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | 号数 |
| `issueID` | 会議録ID |
| `meetingURL` | 会議録テキスト表示画面のURL |
| `nameOfHouse` | 院名 |
| `nameOfMeeting` | 会議名 |
| `pdfURL` | 会議録PDF表示画面のURL |
| `searchObject` | 検索対象箇所（議事冒頭・本文） |
| `session` | 国会回次 |
| `speechRecord` |  |

Operations: list.

API path: `/meeting`

#### MeetingList

| Field | Description |
| --- | --- |
| `closing` | 閉会中フラグ |
| `date` | 開催日付 |
| `imageKind` | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | 号数 |
| `issueID` | 会議録ID |
| `meetingURL` | 会議録テキスト表示画面のURL |
| `nameOfHouse` | 院名 |
| `nameOfMeeting` | 会議名 |
| `pdfURL` | 会議録PDF表示画面のURL |
| `searchObject` | 検索対象箇所（議事冒頭・本文） |
| `session` | 国会回次 |
| `speechRecord` |  |

Operations: list.

API path: `/meeting_list`

#### Speech

| Field | Description |
| --- | --- |
| `closing` | 閉会中フラグ |
| `date` | 開催日付 |
| `imageKind` | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | 号数 |
| `issueID` | 会議録ID |
| `meetingURL` | 会議録テキスト表示画面のURL |
| `nameOfHouse` | 院名 |
| `nameOfMeeting` | 会議名 |
| `pdfURL` | 会議録PDF表示画面のURL |
| `searchObject` | 検索対象箇所（議事冒頭・本文） |
| `session` | 国会回次 |
| `speaker` | 発言者名 |
| `speakerGroup` | 発言者所属会派 |
| `speakerPosition` | 発言者肩書き |
| `speakerRole` | 発言者役割 |
| `speakerYomi` | 発言者よみ |
| `speech` | 発言 |
| `speechID` | 発言ID |
| `speechOrder` | 発言番号 |
| `speechURL` | 発言URL |
| `startPage` | 発言が掲載されている開始ページ |

Operations: list.

API path: `/speech`



## Entities


### Meeting

Create an instance: `const meeting = client.Meeting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closing` | `boolean` | 閉会中フラグ |
| `date` | `string` | 開催日付 |
| `imageKind` | `string` | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | 号数 |
| `issueID` | `string` | 会議録ID |
| `meetingURL` | `string` | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | 院名 |
| `nameOfMeeting` | `string` | 会議名 |
| `pdfURL` | `string` | 会議録PDF表示画面のURL |
| `searchObject` | `string` | 検索対象箇所（議事冒頭・本文） |
| `session` | `number` | 国会回次 |
| `speechRecord` | `any[]` |  |

#### Example: List

```ts
const meetings = await client.Meeting().list()
```


### MeetingList

Create an instance: `const meeting_list = client.MeetingList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closing` | `boolean` | 閉会中フラグ |
| `date` | `string` | 開催日付 |
| `imageKind` | `string` | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | 号数 |
| `issueID` | `string` | 会議録ID |
| `meetingURL` | `string` | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | 院名 |
| `nameOfMeeting` | `string` | 会議名 |
| `pdfURL` | `string` | 会議録PDF表示画面のURL |
| `searchObject` | `string` | 検索対象箇所（議事冒頭・本文） |
| `session` | `number` | 国会回次 |
| `speechRecord` | `any[]` |  |

#### Example: List

```ts
const meeting_lists = await client.MeetingList().list()
```


### Speech

Create an instance: `const speech = client.Speech()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closing` | `boolean` | 閉会中フラグ |
| `date` | `string` | 開催日付 |
| `imageKind` | `string` | イメージ種別（会議録・目次・索引・附録・追録） |
| `issue` | `string` | 号数 |
| `issueID` | `string` | 会議録ID |
| `meetingURL` | `string` | 会議録テキスト表示画面のURL |
| `nameOfHouse` | `string` | 院名 |
| `nameOfMeeting` | `string` | 会議名 |
| `pdfURL` | `string` | 会議録PDF表示画面のURL |
| `searchObject` | `string` | 検索対象箇所（議事冒頭・本文） |
| `session` | `number` | 国会回次 |
| `speaker` | `string` | 発言者名 |
| `speakerGroup` | `string` | 発言者所属会派 |
| `speakerPosition` | `string` | 発言者肩書き |
| `speakerRole` | `string` | 発言者役割 |
| `speakerYomi` | `string` | 発言者よみ |
| `speech` | `string` | 発言 |
| `speechID` | `string` | 発言ID |
| `speechOrder` | `number` | 発言番号 |
| `speechURL` | `string` | 発言URL |
| `startPage` | `number` | 発言が掲載されている開始ページ |

#### Example: List

```ts
const speechs = await client.Speech().list()
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
kokkai-kaigiroku-api/
├── src/
│   ├── KokkaiKaigirokuApiSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { KokkaiKaigirokuApiSDK } from '@voxgig-sdk/kokkai-kaigiroku-api-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const meeting = client.Meeting()
await meeting.list()

// meeting.data() now returns the meeting data from the last `list`
// meeting.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
