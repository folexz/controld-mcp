/**
 * Generates one MCP tool per spec operation.
 *
 * Token routing: GET -> read, mutations -> write. When no write token is configured
 * (canWrite=false), mutating operations are not added to the set at all — they are
 * invisible in tools/list and cannot be called.
 */
import type { ControlDClient } from "../client.js";
import type { OperationDef } from "../spec.js";
import type { McpTool, ToolHandler, ToolSet } from "./types.js";

export function buildGeneratedTools(
  client: ControlDClient,
  operations: OperationDef[],
  canWrite: boolean
): ToolSet {
  const tools: McpTool[] = [];
  const handlers = new Map<string, ToolHandler>();

  for (const op of operations) {
    if (op.mutating && !canWrite) continue; // least-privilege: no write token -> no mutations

    tools.push({
      name: op.name,
      description: op.description,
      inputSchema: op.inputSchema,
      annotations: op.annotations,
    });

    handlers.set(op.name, async (args) => {
      const a = args ?? {};

      // Substitute path parameters.
      let resolvedPath = op.path;
      for (const p of op.pathParams) {
        const v = a[p];
        if (v === undefined || v === null || v === "") {
          throw new Error(`Missing required path parameter '${p}' for ${op.name}`);
        }
        resolvedPath = resolvedPath.replace(`{${p}}`, encodeURIComponent(String(v)));
      }

      // Query parameters.
      const query: Record<string, unknown> = {};
      for (const q of op.queryParams) {
        if (a[q] !== undefined) query[q] = a[q];
      }

      const body = op.hasBody ? a.body : undefined;
      const mode = op.mutating ? "write" : "read";

      return client.request(op.method, resolvedPath, { query, body, mode });
    });
  }

  return { tools, handlers };
}
