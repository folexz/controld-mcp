/**
 * Configuration from the environment.
 *
 * Auth is provided entirely by the MCP host as environment variables (e.g. the
 * `--env` flags of `claude mcp add`, or the `env` block of an MCP client config).
 * No files are read.
 *
 * Least-privilege by design: the READ token is required (the server refuses to
 * start without it); the WRITE token is optional. When the WRITE token is absent,
 * mutating tools are not registered at all (see tools/generated.ts and index.ts),
 * so the server is physically incapable of changing anything in Control D.
 */
export interface Config {
  readToken: string;
  writeToken: string | null;
  canWrite: boolean;
  baseUrl: string;
  orgId: string | null;
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  const readToken = env.CONTROLD_API_TOKEN_READ?.trim();
  if (!readToken) {
    throw new Error(
      "CONTROLD_API_TOKEN_READ is required. Create a Read token at https://controld.com/dashboard/api"
    );
  }
  const writeToken = env.CONTROLD_API_TOKEN_WRITE?.trim() || null;

  return {
    readToken,
    writeToken,
    canWrite: writeToken !== null,
    baseUrl: (env.CONTROLD_API_BASE_URL?.trim() || "https://api.controld.com").replace(/\/+$/, ""),
    orgId: env.CONTROLD_ORG_ID?.trim() || null,
  };
}
