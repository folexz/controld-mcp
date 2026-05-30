/**
 * build-spec.ts — assembles a single OpenAPI 3.0.1 document from the local docs dump.
 *
 * Control D publishes its docs as a set of ReadMe pages, each carrying a self-contained
 * OpenAPI fragment for ONE operation (under the "# OpenAPI definition" heading, in a
 * ```json block). Here we extract those fragments from spec/sources/*.md and deep-merge
 * them into spec/controld-openapi.json.
 *
 * Run: npm run build-spec  (offline, idempotent)
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SOURCES_DIR = join(ROOT, "spec", "sources");
const OUT_FILE = join(ROOT, "spec", "controld-openapi.json");

// Meta pages without an OpenAPI block — skipped explicitly.
const SKIP = new Set(["authentication.md", "get-started.md", "response-conventions.md"]);

type Json = Record<string, any>;

/** Extracts the JSON block following "# OpenAPI definition". Returns null if absent. */
function extractOpenApi(md: string): Json | null {
  const marker = md.indexOf("# OpenAPI definition");
  const haystack = marker >= 0 ? md.slice(marker) : md;
  const match = haystack.match(/```json\s*([\s\S]*?)```/);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch (err) {
    throw new Error(`Failed to JSON.parse OpenAPI block: ${(err as Error).message}`);
  }
}

function mergeComponents(acc: Json, src: Json | undefined) {
  if (!src) return;
  for (const section of Object.keys(src)) {
    acc.components[section] ??= {};
    Object.assign(acc.components[section], src[section]);
  }
}

function main() {
  const files = readdirSync(SOURCES_DIR)
    .filter((f) => f.endsWith(".md") && !SKIP.has(f))
    .sort();

  const spec: Json = {
    openapi: "3.0.1",
    info: { title: "Control D Public API", version: "1.0.1" },
    servers: [{ url: "https://api.controld.com", description: "CD prod" }],
    security: [{ bearerAuth: [] }],
    tags: [] as Json[],
    paths: {} as Json,
    components: {} as Json,
  };
  const seenTags = new Set<string>();

  let opCount = 0;
  const skipped: string[] = [];

  for (const file of files) {
    const doc = extractOpenApi(readFileSync(join(SOURCES_DIR, file), "utf8"));
    if (!doc) {
      skipped.push(file);
      continue;
    }
    // Merge paths (each file -> one path + one method; multiple files share a path).
    for (const [path, methods] of Object.entries(doc.paths ?? {})) {
      spec.paths[path] ??= {};
      for (const [method, op] of Object.entries(methods as Json)) {
        if (spec.paths[path][method]) {
          console.warn(`  ! duplicate ${method.toUpperCase()} ${path} (from ${file}) — overwriting`);
        }
        spec.paths[path][method] = op;
        opCount++;
      }
    }
    mergeComponents(spec, doc.components);
    for (const tag of (doc.tags ?? []) as Json[]) {
      if (tag?.name && !seenTags.has(tag.name)) {
        seenTags.add(tag.name);
        spec.tags.push(tag);
      }
    }
  }

  writeFileSync(OUT_FILE, JSON.stringify(spec, null, 2) + "\n", "utf8");

  console.log(`✓ merged ${opCount} operations across ${Object.keys(spec.paths).length} paths`);
  console.log(`✓ tags: ${[...seenTags].join(", ")}`);
  if (skipped.length) console.log(`  (skipped ${skipped.length} files without OpenAPI block: ${skipped.join(", ")})`);
  console.log(`✓ wrote ${OUT_FILE}`);
}

main();
