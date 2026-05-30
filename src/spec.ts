/**
 * Loads the merged OpenAPI spec and translates each operation into an MCP tool descriptor.
 *
 * Each operation (method + path) becomes one tool:
 *   - name:        controld_<method>_<path-slug>
 *   - inputSchema: JSON Schema built from parameters (path/query) + requestBody (as a `body` field)
 *   - mutating:    anything other than GET (decides which token is used and whether write is required)
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
// In both dist/ and src/ the spec lives one level up, at spec/controld-openapi.json.
const SPEC_PATH = join(__dirname, "..", "spec", "controld-openapi.json");

type Json = Record<string, any>;

export interface OperationDef {
  name: string;
  method: string; // lowercase: get/post/put/patch/delete
  path: string; // template with {param}
  summary: string;
  description: string;
  pathParams: string[];
  queryParams: string[];
  hasBody: boolean;
  mutating: boolean;
  inputSchema: Json;
  annotations: Json;
}

function slugify(path: string): string {
  return path
    .replace(/^\//, "")
    .replace(/\{([^}]+)\}/g, "$1") // {profile_id} -> profile_id
    .replace(/[/-]/g, "_")
    .replace(/[^a-zA-Z0-9_]/g, "");
}

function extractPathParams(path: string): string[] {
  return [...path.matchAll(/\{([^}]+)\}/g)].map((m) => m[1]);
}

export function loadSpec(): Json {
  return JSON.parse(readFileSync(SPEC_PATH, "utf8"));
}

export function buildOperations(spec: Json): OperationDef[] {
  const ops: OperationDef[] = [];

  for (const [path, methods] of Object.entries(spec.paths ?? {})) {
    for (const [method, opRaw] of Object.entries(methods as Json)) {
      const op = opRaw as Json;
      const pathParams = extractPathParams(path);
      const params: Json[] = Array.isArray(op.parameters) ? op.parameters : [];
      const queryParams = params.filter((p) => p.in === "query").map((p) => p.name);

      const properties: Json = {};
      const required: string[] = [];

      // Path + query parameters as top-level properties.
      for (const p of params) {
        if (p.in !== "path" && p.in !== "query") continue;
        properties[p.name] = {
          ...(p.schema ?? { type: "string" }),
          ...(p.description ? { description: p.description } : {}),
        };
        if (p.in === "path" || p.required) required.push(p.name);
      }
      // Path params not declared under `parameters` are still required.
      for (const pp of pathParams) {
        if (!properties[pp]) {
          properties[pp] = { type: "string", description: `Path parameter '${pp}'` };
          required.push(pp);
        }
      }

      // requestBody -> a `body` field.
      const bodySchema = op.requestBody?.content?.["application/json"]?.schema;
      const hasBody = Boolean(bodySchema);
      if (hasBody) {
        properties.body = { ...bodySchema, description: bodySchema.description ?? "Request body (JSON)" };
        if (op.requestBody?.required) required.push("body");
      }

      const mutating = method.toLowerCase() !== "get";

      ops.push({
        name: `controld_${method.toLowerCase()}_${slugify(path)}`,
        method: method.toLowerCase(),
        path,
        summary: op.summary ?? "",
        description:
          [op.summary, op.description].filter(Boolean).join(" — ") || `${method.toUpperCase()} ${path}`,
        pathParams,
        queryParams,
        hasBody,
        mutating,
        inputSchema: {
          type: "object",
          properties,
          ...(required.length ? { required: [...new Set(required)] } : {}),
          additionalProperties: false,
        },
        annotations: {
          title: op.summary || `${method.toUpperCase()} ${path}`,
          readOnlyHint: method.toLowerCase() === "get",
          destructiveHint: method.toLowerCase() === "delete",
          idempotentHint: ["put", "delete"].includes(method.toLowerCase()),
          openWorldHint: true,
        },
      });
    }
  }

  return ops.sort((a, b) => a.name.localeCompare(b.name));
}
