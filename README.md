# controld-mcp

An [MCP](https://modelcontextprotocol.io) server for the [Control D](https://controld.com) API.

It exposes the full documented Control D Public API (profiles, filters, custom rules, rule
folders, services, devices, access lists, analytics, billing, organizations, account) as MCP
tools — **one tool per API operation** — plus two generic escape hatches for anything not
explicitly modeled.

Tools are generated from an OpenAPI spec that is assembled from Control D's own documentation,
so coverage tracks the docs rather than being hand-maintained.

## Highlights

- **Spec-driven**: ~46 typed tools generated from `spec/controld-openapi.json`. Each tool's input
  schema comes straight from the operation's OpenAPI parameters + request body.
- **Two-token least-privilege auth**: a **read** token and an optional **write** token. `GET`
  calls use the read token; mutations (`POST/PUT/PATCH/DELETE`) use the write token. If no write
  token is configured, **mutating tools are not registered at all** — the server is physically
  read-only.
- **Safe annotations**: read-only operations are marked `readOnlyHint`; deletes are
  `destructiveHint`; updates are `idempotentHint`. MCP hosts can use these to gate confirmations.
- **Escape hatches**: `controld_request_read` (GET) and `controld_request_write`
  (POST/PUT/PATCH/DELETE) reach any path, including variants like `/devices/users`.

## Requirements

- Node.js ≥ 18
- A Control D API token (Read and/or Write), created at <https://controld.com/dashboard/api>

## Install

The quickest path is via `npx` (no clone needed) — see the registration sections below,
which run `npx -y controld-mcp`.

To run from source instead:

```bash
git clone https://github.com/folexz/controld-mcp.git
cd controld-mcp
npm install
npm run build
```

## Configuration

All auth is via environment variables, supplied by your MCP host. No files are read.

| Variable                   | Required | Description                                                       |
| -------------------------- | -------- | ----------------------------------------------------------------- |
| `CONTROLD_API_TOKEN_READ`  | yes      | Read token. The server refuses to start without it.               |
| `CONTROLD_API_TOKEN_WRITE` | no       | Write token. If omitted, all mutating tools are disabled.         |
| `CONTROLD_API_BASE_URL`    | no       | Defaults to `https://api.controld.com`.                           |
| `CONTROLD_ORG_ID`          | no       | Sent as `X-Force-Org-Id` (organization accounts only).            |

## Register with Claude Code

Via npx (recommended):

```bash
claude mcp add controld --scope user \
  --env CONTROLD_API_TOKEN_READ=api.your_read_token \
  --env CONTROLD_API_TOKEN_WRITE=api.your_write_token \
  -- npx -y controld-mcp
```

Or from a local build, replace the command with `node /absolute/path/to/controld-mcp/dist/index.js`.

Omit the `CONTROLD_API_TOKEN_WRITE` line to run in read-only mode.

## Register with Claude Desktop / other MCP clients

```jsonc
{
  "mcpServers": {
    "controld": {
      "command": "npx",
      "args": ["-y", "controld-mcp"],
      "env": {
        "CONTROLD_API_TOKEN_READ": "api.your_read_token",
        "CONTROLD_API_TOKEN_WRITE": "api.your_write_token"
      }
    }
  }
}
```

## Inspect locally

```bash
CONTROLD_API_TOKEN_READ=api.xxx npm run inspect
```

This launches the MCP Inspector against the built server.

## Tool coverage

| Category          | Operations                                                                            |
| ----------------- | ------------------------------------------------------------------------------------- |
| Profiles          | list · create · modify · delete · list/modify options · get/set default               |
| Filters           | list native · list 3rd-party · batch modify · modify single                           |
| Custom Rules      | list (by folder) · create · modify · delete                                           |
| Rule Folders      | list · create · modify · delete                                                       |
| Services          | list · modify · service catalog (categories)                                          |
| Devices           | list · types · create · modify · delete                                               |
| Access (Known IPs)| list · add · delete                                                                   |
| Analytics         | endpoints · levels                                                                    |
| Billing           | products · subscriptions · payments                                                   |
| Organizations     | get · members · sub-organizations · create suborg · modify                            |
| Account / Network | account (`/users`) · ip · network · proxies                                           |

Run `tools/list` against the server for the exact, current set.

## Updating the API spec

The spec is built offline from a copy of the Control D docs kept in `spec/sources/*.md`
(each file carries a self-contained OpenAPI fragment). To regenerate after refreshing those
sources:

```bash
npm run build-spec   # -> spec/controld-openapi.json
```

## Security notes

- Tokens are read from the environment only; nothing is logged. Logs go to stderr (stdout is the
  MCP JSON-RPC channel).
- Prefer configuring only `CONTROLD_API_TOKEN_READ` unless you actually need mutations.
- Never commit real tokens. `.env` is gitignored; `.env.example` shows the shape.

## License

MIT — see [LICENSE](./LICENSE).
