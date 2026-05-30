/**
 * ControlDClient — a thin fetch wrapper around api.controld.com.
 *
 * The key responsibility is token selection by call mode:
 *   mode 'read'  -> READ token  (GET)
 *   mode 'write' -> WRITE token (POST/PUT/PATCH/DELETE)
 * If a write call is requested but no write token is configured, it throws a clear error.
 *
 * It also unwraps Control D's response envelope `{ success, body, error }`:
 * on success:false it throws an Error carrying the API message + code.
 */
import type { Config } from "./config.js";

export type Mode = "read" | "write";

export interface RequestOptions {
  query?: Record<string, unknown> | undefined;
  body?: unknown;
  mode: Mode;
}

export class ControlDError extends Error {
  constructor(message: string, readonly code?: number, readonly httpStatus?: number) {
    super(message);
    this.name = "ControlDError";
  }
}

export class ControlDClient {
  constructor(private readonly config: Config) {}

  private tokenFor(mode: Mode): string {
    if (mode === "read") return this.config.readToken;
    if (!this.config.writeToken) {
      throw new ControlDError(
        "This operation requires a WRITE token, but CONTROLD_API_TOKEN_WRITE is not configured."
      );
    }
    return this.config.writeToken;
  }

  async request(method: string, path: string, opts: RequestOptions): Promise<unknown> {
    const url = new URL(this.config.baseUrl + (path.startsWith("/") ? path : `/${path}`));
    for (const [k, v] of Object.entries(opts.query ?? {})) {
      if (v === undefined || v === null) continue;
      url.searchParams.set(k, String(v));
    }

    const headers: Record<string, string> = {
      authorization: `Bearer ${this.tokenFor(opts.mode)}`,
      accept: "application/json",
    };
    if (this.config.orgId) headers["X-Force-Org-Id"] = this.config.orgId;

    const hasBody = opts.body !== undefined && opts.body !== null && method.toUpperCase() !== "GET";
    if (hasBody) headers["content-type"] = "application/json";

    const res = await fetch(url, {
      method: method.toUpperCase(),
      headers,
      body: hasBody ? JSON.stringify(opts.body) : undefined,
    });

    const text = await res.text();
    let parsed: any;
    try {
      parsed = text ? JSON.parse(text) : {};
    } catch {
      // Non-JSON response: return as-is on success, throw the raw text on error.
      if (!res.ok) throw new ControlDError(text || res.statusText, undefined, res.status);
      return text;
    }

    if (parsed?.success === false || !res.ok) {
      const msg = parsed?.error?.message ?? parsed?.message ?? res.statusText;
      const code = parsed?.error?.code;
      throw new ControlDError(String(msg), code, res.status);
    }

    // Success: return the contents of `body` (plus message, if present).
    if (parsed?.message) return { ...(parsed.body ?? {}), _message: parsed.message };
    return parsed?.body ?? parsed;
  }
}
