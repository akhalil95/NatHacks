export const BACKEND_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export function buildBackendWsUrl(path = "/ws") {
  const wsBase =
    process.env.NEXT_PUBLIC_WS_URL || BACKEND_BASE_URL.replace(/^http/, "ws");

  return `${wsBase}${path}`;
}