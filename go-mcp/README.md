# anapioficeandfire-mcp

MCP server exposing An API of Ice and Fire (`https://anapioficeandfire.com/api`) as tools, built on the [official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the published Go SDK at `github.com/voxgig-sdk/anapioficeandfire-sdk/go`.

## Tools

| Tool         | Args                                          | Returns                            |
|--------------|-----------------------------------------------|------------------------------------|
| `aoiaf_list` | `entity` (book\|character\|house), `query?`   | First page (~10 records) as JSON   |
| `aoiaf_load` | `entity`, `query` (`{id:N}` required)         | Single record as JSON              |

JSON schemas for both tools are emitted by the SDK from the `Args` struct's `json` / `jsonschema` tags — no schema is hand-written.

## Build & run

```sh
go build -o anapioficeandfire-mcp ./...

# stdio (for spawnable agent installs)
./anapioficeandfire-mcp

# streamable HTTP on :8080
./anapioficeandfire-mcp -transport http -addr :8080
```

## Install for Claude Code

```sh
claude mcp add --scope user anapioficeandfire \
  -- /path/to/anapioficeandfire-mcp -transport stdio
```

After install, restart Claude Code; the `aoiaf_list` and `aoiaf_load` tools become available in new sessions.

## Smoke test via HTTP

```sh
./anapioficeandfire-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' -H 'Accept: application/json, text/event-stream' \
  -D headers -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"aoiaf_load","arguments":{"entity":"house","query":{"id":3}}}}'
```
