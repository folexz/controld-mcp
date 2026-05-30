/**
 * Generic escape-hatch tools — reach any Control D endpoint that may not be among
 * the generated ones (variants like /devices/users, /devices/routers, future endpoints).
 *
 *   controld_request_read  — GET only, via the read token.
 *   controld_request_write — POST/PUT/PATCH/DELETE via the write token (only when canWrite).
 */
import type { ControlDClient } from "../client.js";
import type { McpTool, ToolHandler, ToolSet } from "./types.js";

export function buildGenericTools(client: ControlDClient, canWrite: boolean): ToolSet {
  const tools: McpTool[] = [];
  const handlers = new Map<string, ToolHandler>();

  tools.push({
    name: "controld_request_read",
    description:
      "Low-level GET to any Control D API path using the READ token. Use when no typed tool " +
      "fits (e.g. /devices/users, /devices/routers). `path` must start with '/', " +
      "e.g. '/profiles' or '/profiles/{PK}/filters'.",
    inputSchema: {
      type: "object",
      properties: {
        path: { type: "string", description: "API path starting with '/'. E.g. '/devices/users'." },
        query: { type: "object", description: "Query parameters (key -> value).", additionalProperties: true },
      },
      required: ["path"],
      additionalProperties: false,
    },
    annotations: { title: "Control D: raw GET", readOnlyHint: true, openWorldHint: true },
  });
  handlers.set("controld_request_read", async (args) => {
    const path = String(args?.path ?? "");
    if (!path.startsWith("/")) throw new Error("path must start with '/'");
    return client.request("GET", path, { query: args?.query, mode: "read" });
  });

  if (canWrite) {
    tools.push({
      name: "controld_request_write",
      description:
        "Low-level mutating request (POST/PUT/PATCH/DELETE) to any Control D API path using the " +
        "WRITE token. Changes configuration — use deliberately.",
      inputSchema: {
        type: "object",
        properties: {
          method: { type: "string", enum: ["POST", "PUT", "PATCH", "DELETE"], description: "HTTP method." },
          path: { type: "string", description: "API path starting with '/'." },
          body: { type: "object", description: "Request body (JSON).", additionalProperties: true },
        },
        required: ["method", "path"],
        additionalProperties: false,
      },
      annotations: { title: "Control D: raw write", destructiveHint: true, openWorldHint: true },
    });
    handlers.set("controld_request_write", async (args) => {
      const method = String(args?.method ?? "").toUpperCase();
      const path = String(args?.path ?? "");
      if (!["POST", "PUT", "PATCH", "DELETE"].includes(method)) throw new Error("method must be POST/PUT/PATCH/DELETE");
      if (!path.startsWith("/")) throw new Error("path must start with '/'");
      return client.request(method, path, { body: args?.body, mode: "write" });
    });
  }

  return { tools, handlers };
}
