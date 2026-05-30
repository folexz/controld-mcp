#!/usr/bin/env node
/**
 * controld-mcp — an MCP server for the Control D API.
 *
 * Tools are generated from the merged OpenAPI spec (spec/controld-openapi.json) —
 * one per operation — plus two generic escape hatches. Read/write are separated by
 * two tokens; without a write token, mutating tools are not registered.
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

import { loadConfig } from "./config.js";
import { ControlDClient } from "./client.js";
import { loadSpec, buildOperations } from "./spec.js";
import { buildGeneratedTools } from "./tools/generated.js";
import { buildGenericTools } from "./tools/generic.js";
import type { McpTool, ToolHandler } from "./tools/types.js";

async function main() {
  const config = loadConfig();
  const client = new ControlDClient(config);
  const operations = buildOperations(loadSpec());

  const generated = buildGeneratedTools(client, operations, config.canWrite);
  const generic = buildGenericTools(client, config.canWrite);

  const tools: McpTool[] = [...generated.tools, ...generic.tools];
  const handlers = new Map<string, ToolHandler>([...generated.handlers, ...generic.handlers]);

  const server = new Server(
    { name: "controld-mcp", version: "0.1.0" },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

  server.setRequestHandler(CallToolRequestSchema, async (req) => {
    const handler = handlers.get(req.params.name);
    if (!handler) {
      return { isError: true, content: [{ type: "text", text: `Unknown tool: ${req.params.name}` }] };
    }
    try {
      const result = await handler((req.params.arguments ?? {}) as Record<string, any>);
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
    } catch (err) {
      return { isError: true, content: [{ type: "text", text: `Error: ${(err as Error).message}` }] };
    }
  });

  await server.connect(new StdioServerTransport());

  // Log to stderr only — stdout is reserved for the MCP protocol (JSON-RPC).
  console.error(
    `controld-mcp ready: ${tools.length} tools ` +
      `(${generated.tools.length} generated + ${generic.tools.length} generic), ` +
      `write=${config.canWrite ? "on" : "OFF (read-only)"}`
  );
}

main().catch((err) => {
  console.error("Fatal:", (err as Error).message);
  process.exit(1);
});
