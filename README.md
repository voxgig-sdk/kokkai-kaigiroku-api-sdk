# KokkaiKaigirokuApi SDK

Search Japan's National Diet (Kokkai) meeting minutes and individual speeches by date, session, speaker, and keyword

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About 国会会議録検索API

The Kokkai Kaigiroku Search API (国会会議録検索システム) is operated by the [National Diet Library of Japan](https://kokkai.ndl.go.jp/) and exposes the full text of proceedings from both houses of the Japanese National Diet. The records cover plenary sessions and committee meetings, with speaker-level granularity.

What you get from the API:

- Three search endpoints: a lightweight meeting list (`/meeting_list`), full meeting records (`/meeting`), and individual speech records (`/speech`).
- Meeting fields include session number, house name, meeting name, issue number, date, meeting ID, and links to the HTML and PDF views on kokkai.ndl.go.jp.
- Speech fields include speaker name, speaker affiliation and role, speech order within the meeting, the full speech text, and a starting page reference.
- Responses are XML by default; JSON is available via the `recordPacking` parameter.

Operational notes: no authentication or registration is required. The simple meeting-list and speech endpoints return up to 100 records per request, while the full meeting endpoint returns up to 10. The library asks for several seconds between requests and discourages concurrent or short-window bulk access.

## Try it

**TypeScript**
```bash
npm install kokkai-kaigiroku-api
```

**Python**
```bash
pip install kokkai-kaigiroku-api-sdk
```

**PHP**
```bash
composer require voxgig/kokkai-kaigiroku-api-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go
```

**Ruby**
```bash
gem install kokkai-kaigiroku-api-sdk
```

**Lua**
```bash
luarocks install kokkai-kaigiroku-api-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { KokkaiKaigirokuApiSDK } from 'kokkai-kaigiroku-api'

const client = new KokkaiKaigirokuApiSDK({})

// List all meetings
const meetings = await client.Meeting().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o kokkai-kaigiroku-api-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "kokkai-kaigiroku-api": {
      "command": "/abs/path/to/kokkai-kaigiroku-api-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Meeting** | Full meeting record including all speeches from a single Diet sitting, served from `/api/meeting` (up to 10 records per request). | `/meeting` |
| **MeetingList** | Lightweight index of meetings matching a query, served from `/api/meeting_list` with session, house, meeting name, date, and links to HTML/PDF views (up to 100 per request). | `/meeting_list` |
| **Speech** | Individual speech utterance with speaker name, affiliation, role, full text, and order within the meeting, served from `/api/speech` (up to 100 per request). | `/speech` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from kokkaikaigirokuapi_sdk import KokkaiKaigirokuApiSDK

client = KokkaiKaigirokuApiSDK({})

# List all meetings
meetings, err = client.Meeting(None).list(None, None)
```

### PHP

```php
<?php
require_once 'kokkaikaigirokuapi_sdk.php';

$client = new KokkaiKaigirokuApiSDK([]);

// List all meetings
[$meetings, $err] = $client->Meeting(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go"

client := sdk.NewKokkaiKaigirokuApiSDK(map[string]any{})

// List all meetings
meetings, err := client.Meeting(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "KokkaiKaigirokuApi_sdk"

client = KokkaiKaigirokuApiSDK.new({})

# List all meetings
meetings, err = client.Meeting(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("kokkai-kaigiroku-api_sdk")

local client = sdk.new({})

-- List all meetings
local meetings, err = client:Meeting(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = KokkaiKaigirokuApiSDK.test()
const result = await client.Meeting().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = KokkaiKaigirokuApiSDK.test(None, None)
result, err = client.Meeting(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = KokkaiKaigirokuApiSDK::test(null, null);
[$result, $err] = $client->Meeting(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Meeting(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = KokkaiKaigirokuApiSDK.test(nil, nil)
result, err = client.Meeting(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Meeting(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the 国会会議録検索API

- Upstream: [https://kokkai.ndl.go.jp/](https://kokkai.ndl.go.jp/)
- API docs: [https://kokkai.ndl.go.jp/api.html](https://kokkai.ndl.go.jp/api.html)

- No registration or API key required to call the service.
- The National Diet Library publishes the records under its website terms of use.
- Individual speeches are copyrighted by their speakers; reuse generally requires permission except for fair-use cases such as private use, quotation, news reporting, and computational analysis.
- The library asks callers to space requests by several seconds and avoid concurrent or bulk access; access may be blocked if service stability is threatened.

---

Generated from the 国会会議録検索API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
